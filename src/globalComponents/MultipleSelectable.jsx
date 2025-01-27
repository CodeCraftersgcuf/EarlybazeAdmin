import React, { useState, useEffect, useRef } from 'react';

const MultipleSelectable = ({ options, heading, handleOptionSelect, style, showSearch = true }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOption = (option) => {
        let updatedSelections;

        if (selectedOptions.includes(option)) {
            updatedSelections = selectedOptions.filter(item => item !== option);
        } else {
            updatedSelections = [...selectedOptions, option];
        }

        setSelectedOptions(updatedSelections);
        handleOptionSelect(updatedSelections);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const handleFilter = (value) => {
        setSearchFilter(value.trim().toLowerCase());
    };

    return (
        <div className="relative text-left w-full" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={`flex items-center gap-2 bg-dark-700 text-white border w-full border-[#25AE7A] px-4 py-2 rounded-lg bg-[#042619] ${style}`}
            >
                <span className='flex items-center gap-2 w-full max-w-md'>
                    <span>
                        {selectedOptions.length > 0 ? (
                            <span>{selectedOptions.join(', ')}</span>
                        ) : (
                            <span className='text-nowrap'>{heading}</span>
                        )}
                    </span>
                </span>
                <i className={`bi bi-chevron-${isOpen ? 'down' : 'right'} pl-2 text-xl`}></i>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-full bg-[#042619] border border-gray-500 rounded-lg shadow-lg max-h-60 overflow-y-auto p-4">
                    {showSearch && (
                        <div className='p-2 bg-green-900 rounded-lg flex items-center gap-2 sticky top-0'>
                            <i className="bi bi-search text-white"></i>
                            <input
                                type='text'
                                onChange={(e) => handleFilter(e.target.value)}
                                value={searchFilter}
                                placeholder="Search"
                                className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
                            />
                        </div>
                    )}
                    <ul className="py-2">
                        {options
                            .filter(option => option.name.toLowerCase().includes(searchFilter))
                            .map((option, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center gap-3 py-2 cursor-pointer rounded-lg ${selectedOptions.includes(option.value) ? 'text-white' : 'text-white hover:bg-green-950'}`}
                                    onClick={() => handleOption(option.value)}
                                >
                                    <div
                                        className={`border border-gray-400 flex items-center rounded justify-center p-[2px] px-[4px]  
                                        ${selectedOptions.includes(option.value) ? 'text-white bg-green-600' : 'text-gray-400'}`}
                                    >
                                        <i className={`bi bi-check2 text-[10px] `}></i>
                                    </div>
                                    <img
                                        src={option.img}
                                        alt={option.name}
                                        className="w-10 h-10 rounded-full border border-gray-500"
                                    />
                                    {option.name}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MultipleSelectable;
