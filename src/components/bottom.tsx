// Dependencies
import { useApp } from '../main';
import moment from 'moment';

export default () => {
	// Destructuring values from the app context using the useApp hook
	const { weatherData, lastUpdated, resetWeatherData } = useApp();

	// If data is not available, return an empty fragment
	if (!weatherData) return <></>;

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<span className="font-medium text-xs text-[#fffef9]/60">Updated {moment(lastUpdated || new Date()).calendar()}</span>

			<button className="text-[#8ebde2]" onClick={resetWeatherData}>
				Reset
			</button>
		</div>
	);
};
