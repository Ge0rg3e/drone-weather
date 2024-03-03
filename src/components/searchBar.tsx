// Dependencies
import cityTimezones, { CityData } from 'city-timezones';
import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useApp } from '../main';

export default () => {
	// Accessing selectedCity and setSelectedCity from the app context
	const { selectedCity, setSelectedCity } = useApp();

	// State variables
	const [results, setResults] = useState<CityData[]>([]); // Array of CityData for search results
	const [query, setQuery] = useState(''); // Query string for city search

	// useEffect to update results when query changes
	useEffect(() => {
		// If query is empty, clear the results
		if (query === '') return setResults([]);

		// Filter cityMapping based on query
		const cityMapping = cityTimezones.cityMapping;
		const findCity = cityMapping.filter((entry) => entry.city.toLocaleLowerCase().includes(query.toLocaleLowerCase())).splice(0, 5);

		// Update results
		setResults(findCity);
	}, [query]);

	return (
		<Combobox value={selectedCity} onChange={(value) => setSelectedCity(value)}>
			<div className="relative">
				{/* Search input */}
				<div className="w-full h-14 bg-[#161a2c] border-[0.1px] border-[#8ebde2] rounded-lg px-4 backdrop-blur-xl flex items-center gap-x-3">
					<i className="fa-solid fa-magnifying-glass text-2xl" />
					<Combobox.Input className="w-full h-full bg-transparent outline-none" placeholder="Enter your city name" onChange={(e) => setQuery(e.target.value)} />
				</div>

				{/* Transition for search results */}
				<Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
					<Combobox.Options className="absolute w-full bg-[#161a2c] border-[0.1px] border-[#8ebde2] rounded-lg p-3 backdrop-blur-xl max-h-60 z-50">
						{results.length === 0 && query !== '' ? (
							<></> // If no results and query is not empty, render nothing
						) : (
							results.map((item, i) => (
								<Combobox.Option
									className={({ active }) => `animate-fadein relative cursor-default select-none py-2 pl-5 pr-4 ${active && 'bg-[#8ebde2]'} rounded-md`}
									value={item.city}
									key={i}
								>
									<span className="block truncate animate-fadein">{item.city}</span>
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
};
