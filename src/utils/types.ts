export interface WeatherData {
	location: {
		name: string;
		country: string;
		localtime: Date;
	};
	current: {
		wind_degree: number;
		pressure_mb: number;
		humidity: number;
		wind_kph: number;
		vis_km: number;
		temp_c: number;
		condition: {
			text: string;
			icon: string;
			code: string;
		};
	};
}

export interface AppContextType {
	weatherData: WeatherData | null;
	selectedCity: string;
	setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
	lastUpdated: Date | null;
	resetWeatherData: () => void;
}
