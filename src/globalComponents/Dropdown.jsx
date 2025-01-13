import React, { useState } from "react";

const Dropdown = ({ options, selected, onChange, placeholder }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        onChange(option); // Pass selected option to parent
        setDropdownOpen(false); // Close the dropdown
    };

    return (
        <div
            className="relative dropdown"
            onMouseEnter={() => setDropdownOpen(true)} // Open on hover
            onMouseLeave={() => setDropdownOpen(false)} // Close on hover out
        >
            <button
                className="flex items-center px-4 py-2 border rounded-lg"
            >
                {selected || placeholder}
                <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </button>
            {dropdownOpen && (
                <div className="absolute z-10 min-w-32 right-0 bg-theme-light border rounded-lg shadow text-white overflow-hidden">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            className="w-full px-4 py-2 mr-8 text-left hover:bg-gray-100 hover:text-black"
                            onClick={() => handleOptionClick(option)} // Call handler
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
