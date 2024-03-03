// Dependencies
import { WeatherData } from './types';
import axios from 'axios';

/**
 * Function to scroll to a specific section on the page
 * @param id - id of section
 */
export const scrollToSection = (id: string) => {
	// If the target section is 'home', scroll to the top of the page
	if (id === 'home') return window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

	// Get the target section element by its id
	const section = document.getElementById(id);

	// If the section element exists, scroll to it smoothly
	if (section) section.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Function to get weather data
 * @param input - city name or coords
 */
export const getWeatherData = async (input: string) => {
	try {
		const protocol = window.location.protocol;
		const apiKey = import.meta.env.VITE_APP_WEATHER_API;

		const url = `${protocol}//api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`;

		// Fetch api
		const response = await axios.get(url);

		// Return response
		return response.data;
	} catch (err) {
		// Log error if fetching fails
		console.error('Error fetching weather data:', err);

		// Return error message
		return {
			error: 'Oops! Something went wrong while fetching the weather data. Please try again later.'
		};
	}
};

/**
 * Function to determine if it's good to fly based on wind speed, humidity, and time of day.
 * @param data Object containing weather data including wind speed, humidity, and timezone information.
 */
export const isGoodToFly = (data: WeatherData) => {
	// Check wind speed
	if (data.current.wind_kph > 32) {
		return { error: true, message: 'Not good to fly due to high wind speed.' };
	}

	// Check high temperature
	if (data.current.temp_c > 35) {
		return { error: true, message: 'Not good to fly due to high temperature.' };
	}

	// Check low temperature
	if (data.current.temp_c < 5) {
		return { error: true, message: 'Not good to fly due to low temperature.' };
	}

	// Check if it's raining
	const currentWeather = data.current.condition.text.toLowerCase();
	if (currentWeather.includes('rain')) {
		return { error: true, message: 'Not good to fly due to rainy conditions.' };
	}

	// Check if it's snowing
	if (currentWeather.includes('snow')) {
		return { error: true, message: 'Not good to fly due to snowy conditions.' };
	}

	// Check if it's nighttime
	const localTime = new Date(data.location.localtime);
	const hour = localTime.getHours();

	// Assuming night time is between 8 PM and 6 AM
	if (hour >= 20 || hour < 6) {
		return { error: true, message: 'Not good to fly at night.' };
	}

	// If neither wind nor nighttime is a concer
	return { error: false, message: 'Good to fly' };
};

/**
 * Function to get device location.
 */
export const getLocation = async () =>
	(await new Promise((res) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					res({ error: false, coords: `${latitude},${longitude}` });
				},
				() => {
					res({ error: true, message: 'The location cannot be accessed. Please use the search bar.' });
				}
			);
		} else {
			res({ error: true, message: 'Geolocation is not supported by this browser.' });
		}
	})) as any;
