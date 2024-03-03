// Dependencies
import { isGoodToFly } from '../utils/helpers';
import { useApp } from '../main';

export default () => {
	// Use the app context to access data
	const { weatherData } = useApp();

	return (
		<div className="flex h-full flex-col rounded-2xl bg-[#161a2c] border-[0.1px] border-[#8ebde2] p-6 backdrop-blur-xl">
			<div className="w-full border-b-2 border-b-[#f8fafc]/10 pb-3 mb-2">
				<span className="text-xl font-semibold">Wind</span>
			</div>

			<div className="relative w-full h-[200px] flex justify-center items-center" id="compass">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 331">
					<g fill="none" fillRule="evenodd" opacity=".401">
						<path fill="#fffef9" d="M11.5 0 23 23H0z" transform="translate(154 31)"></path>
						<path stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2" d="m11.421 250 .158 17.999" transform="translate(154 31)"></path>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(3 -566.204 3300.048)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(6 -241.38 1723.694)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(9 -133.006 1197.762)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(12 -78.745 934.435)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(15 -46.128 776.15)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(18 -24.333 670.385)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(21 -8.724 594.63)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(24 3.021 537.632)"></path>
						</g>
						<g stroke="#0fffef900" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(27 12.19 493.137)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(30 19.555 457.394)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(33 25.609 428.015)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(36 30.679 403.409)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(39 34.993 382.473)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(42 38.713 364.42)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(45 41.959 348.673)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(48 44.816 334.798)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(51 47.359 322.465)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(54 49.636 311.415)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(57 51.69 301.446)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(60 53.555 292.394)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(63 55.258 284.128)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(66 56.822 276.539)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(69 58.264 269.538)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(72 59.601 263.051)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(75 60.845 257.016)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(78 62.007 251.379)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(81 63.096 246.095)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(84 64.12 241.125)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(87 65.086 236.437)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(90 66 232)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(93 66.868 227.79)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(96 67.694 223.784)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(99 68.48 219.962)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(102 69.233 216.307)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(105 69.955 212.805)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(108 70.649 209.44)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(111 71.317 206.2)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(114 71.96 203.075)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(117 72.582 200.056)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(120 73.185 197.131)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(123 73.77 194.294)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(126 74.338 191.536)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(129 74.892 188.85)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(132 75.431 186.231)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(135 75.959 183.673)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(138 76.474 181.169)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(141 76.98 178.715)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(144 77.477 176.306)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(147 77.965 173.938)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="2">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(150 78.445 171.606)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(153 78.919 169.306)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(156 79.386 167.036)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(159 79.85 164.79)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(162 80.307 162.566)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(165 80.762 160.362)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(168 81.213 158.171)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(171 81.662 155.993)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(174 82.109 153.824)"></path>
						</g>
						<g stroke="#fffef9" strokeLinecap="square" strokeLinejoin="bevel">
							<path d="m.421 0 .158 17.999M.421 247l.158 17.999" transform="rotate(177 82.554 151.66)"></path>
						</g>
						<g fill="#fffef9" fontSize="36" fontWeight="bold">
							<text transform="translate(60 60)">
								<tspan x="92.501" y="33">
									N
								</tspan>
							</text>
							<text transform="translate(60 60)">
								<tspan x="178.494" y="118">
									E
								</tspan>
							</text>
							<text transform="translate(60 60)">
								<tspan x="93.494" y="203">
									S
								</tspan>
							</text>
							<text transform="translate(60 60)">
								<tspan x="3.511" y="118">
									W
								</tspan>
							</text>
						</g>
					</g>
				</svg>

				<svg fill="#fffef9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 331" className="smth" style={{ transform: `rotate(${weatherData!.current.wind_degree}deg)` }}>
					<path d="M163 103V57.785c-6.817-1.185-12-7.13-12-14.285 0-8.008 6.492-14.5 14.5-14.5S180 35.492 180 43.5c0 7.155-5.183 13.1-12 14.285V103h-5zm2.5-50a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zm0 250L151 274h12v-47h5l-.001 47H180l-14.5 29z"></path>
				</svg>

				<div className="absolute top-[0] left-[0] w-full h-full flex flex-col justify-center items-center text-center text-[30px] font-bold">
					<span>{weatherData?.current.wind_kph.toFixed(0)}</span>
					<span className="text-[15px] font-thin">km/h</span>
				</div>
			</div>

			{/* State */}
			{isGoodToFly(weatherData!) && (
				<div
					className={`w-full h-14 flex justify-center items-center text-center ${
						isGoodToFly(weatherData!).error === true ? 'text-red-400 text-base' : 'text-green-400 text-2xl'
					} font-medium gap-x-2`}
				>
					<i className={`fa-solid fa-${isGoodToFly(weatherData!).error === true ? 'triangle-exclamation' : 'circle-check'}`} />
					<span>{isGoodToFly(weatherData!).message}</span>
				</div>
			)}
		</div>
	);
};
