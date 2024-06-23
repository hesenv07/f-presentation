'use client';

import { useState } from 'react';
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions
} from '@headlessui/react';
import { SearchIcon } from 'components/svgs';

const people = [
    { id: 1, name: 'Teqdimatlar tebiat haqqinda', url: '' },

];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Search = () => {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query?.toLowerCase());
            });

    return (
        <div className="relative z-50">
            <Combobox as="div" value={query} onChange={(value) => setQuery(value)}>
                <div className="relative   rounded-xl  shadow-2xl ring-1 ring-black ring-opacity-20">
                    <SearchIcon className="pointer-events-none absolute left-4 top-2.5 h-6 w-5 text-gray-400" />
                    <ComboboxInput
                        autoFocus
                        className="h-10 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        onChange={(event) => {
                            setQuery(event.target.value);
                            setOpen(true);
                        }}
                        onBlur={() => setOpen(false)}
                    />
                </div>

                {open && (
                    <ComboboxOptions static className="absolute left-0 mt-2 w-full max-h-72 overflow-y-auto bg-white rounded-md shadow-lg z-50 py-2 text-sm text-gray-800">
                        {filteredPeople.length > 0 ? (
                            filteredPeople.map((person) => (
                                <ComboboxOption
                                    key={person.id}
                                    value={person.name}
                                    className={({ active }) =>
                                        classNames('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white')
                                    }
                                >
                                    {person.name}
                                </ComboboxOption>
                            ))
                        ) : (
                            <div className="p-4 text-sm text-gray-500">No results found.</div>
                        )}
                    </ComboboxOptions>
                )}
            </Combobox>
        </div>
    );
}

export default Search;
