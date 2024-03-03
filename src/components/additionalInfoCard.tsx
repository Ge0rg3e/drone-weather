// Dependencies
import { useApp } from '../main';

export default () => {
	// Destructuring the data object from the app context using the useApp hook
	const { weatherData } = useApp();

	// Render the component
	return (
		<div className="flex h-full flex-col rounded-2xl bg-[#161a2c] border-[0.1px] border-[#8ebde2] p-6 backdrop-blur-xl">
			<div className="w-full border-b-2 border-b-[#f8fafc]/10 pb-3 mb-5">
				<span className="text-xl font-semibold">Today</span> {/* Displaying the title */}
			</div>

			<div className="grid h-full auto-rows-[1fr] grid-cols-2 gap-y-4">
				{/* Visibility */}
				<div>
					<p className="font-medium text-[#fffef9]/60 text-xs">Visibility</p>
					<p className="text-5xl">
						{weatherData!.current.vis_km.toFixed(0)} {/* Displaying visibility in kilometers */}
						<span className="ml-2 text-base">km</span> {/* Displaying unit */}
					</p>
				</div>

				{/* Humidity */}
				<div>
					<p className="font-medium text-[#fffef9]/60 text-xs">Humidity</p>
					<p className="text-5xl">
						{weatherData!.current.humidity.toFixed(0)} {/* Displaying humidity */}
						<span className="ml-2 text-base">%</span> {/* Displaying unit */}
					</p>
				</div>

				{/* Pressure */}
				<div>
					<p className="font-medium text-[#fffef9]/60 text-xs">Pressure</p>
					<p className="text-5xl">
						{weatherData!.current.pressure_mb.toFixed(0)} {/* Displaying pressure in millibars */}
						<span className="ml-2 text-base">hPa</span> {/* Displaying unit */}
					</p>
				</div>

				{/* Temperature */}
				<div>
					<p className="font-medium text-[#fffef9]/60 text-xs">Temperature</p>
					<p className="flex text-5xl">{weatherData!.current.temp_c.toFixed(0)}°</p> {/* Displaying temperature in degrees Celsius */}
				</div>
			</div>
		</div>
	);
};
