// Dependencies
import { createContext, useContext, useEffect, useState } from 'react';
import { type AppContextType, type WeatherData } from './utils/types';
import { getLocation, getWeatherData } from './utils/helpers';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';

// Components
import AdditionalInfoCard from './components/additionalInfoCard';
import SearchBar from './components/searchBar';
import WindCard from './components/windCard';
import Header from './components/header';
import Bottom from './components/bottom';

// Styles
import './main.css';

// Context
const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext) as AppContextType;

// Main App Component
const App = () => {
	// State
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [selectedCity, setSelectedCity] = useState<string>('');
	const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
	const [error, setError] = useState<string | null>(null);

	// Fetch weather data based on selected city
	const fetchWeatherByCity = async (city: string) => {
		if (city === '') return;

		// Get data
		const res = await getWeatherData(city);

		// Handle error
		if (res.error) {
			setError(res.error);
		} else {
			// Set weather data
			setWeatherData(res);
			setLastUpdated(new Date());
		}
	};

	// Fetch weather data based on device location if selected city is empty
	const fetchWeatherByLocation = async () => {
		if (selectedCity !== '') return;

		// Get device location
		const locationResult = await getLocation();

		if (locationResult.error === true) {
			return setError(locationResult.message);
		}

		// Fetch weather data
		const weatherResult = await getWeatherData(locationResult.coords);

		// Handle error
		if (weatherResult.error) {
			setError(weatherResult.error);
		} else {
			// Set weather data
			setWeatherData(weatherResult);
			setSelectedCity(weatherResult!.location.name);
			setLastUpdated(new Date());
		}
	};

	// Fetch Weather Data Effect
	useEffect(() => {
		// Fetch weather data based on selected city
		fetchWeatherByCity(selectedCity);

		// Fetch weather data based on device location if selected city is empty
		fetchWeatherByLocation();

		// Fetch data periodically
		const fetchDataInterval = setInterval(() => {
			fetchWeatherByCity(selectedCity);
			fetchWeatherByLocation();
		}, 300000);

		return () => clearInterval(fetchDataInterval); // Clean up interval on unmount
	}, [selectedCity]); // Run effect when selected city changes

	// Reset Weather Data
	const resetWeatherData = () => {
		// Reset selected city state
		setSelectedCity('');
		// Reset weather data state
		setWeatherData(null);
	};

	return (
		<AppContext.Provider value={{ weatherData, selectedCity, setSelectedCity, lastUpdated, resetWeatherData }}>
			{/* Head */}
			<Helmet>
				<title>{!weatherData ? 'Drone Weather' : `Drone Weather - ${weatherData.location.name}, ${weatherData.location.country}`}</title>
			</Helmet>

			{/* Content */}
			<main className="px-5 lg:px-10 2xl:px-80">
				<Header />
				<SearchBar />

				{/* Error */}
				{error && (
					<div className="flex justify-center items-center mt-10 text-red-400 font-medium gap-x-2 animate-fadein">
						<i className="fa-solid fa-triangle-exclamation" />
						<span>{error}</span>
					</div>
				)}

				{/* Weather data */}
				{weatherData ? (
					<div className="grid grid-cols-2 gap-8 xl:grid-cols-3 my-14 animate-fadein">
						<div className="col-span-3 md:col-span-1">
							<WindCard />
						</div>
						<div className="col-span-3 md:col-span-2">
							<AdditionalInfoCard />
						</div>
					</div>
				) : (
					<div className="flex justify-center items-center h-[500px]">
						<div className="bg-[#8ebde2]/20 border-[1px] border-[#8ebde2] w-[300px] h-[300px] flex justify-center items-center rounded-full animate-fadein">
							<img src="/assets/droneweather.png" className="w-[200px] h-auto select-none" onDragStart={(e) => e.preventDefault()} />
						</div>
					</div>
				)}

				<Bottom />
			</main>
		</AppContext.Provider>
	);
};

// Render the App
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
