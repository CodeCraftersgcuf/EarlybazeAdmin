import React, { useState } from "react";

const Dropdown = ({
    options,
    selected,
    onChange,
    placeholder = "Select an option",
    // styling
    roundedValue = 'lg',
    position = 'right-0',
    bgColor = 'transparent',
    borderColor = 'white',
    disabled = false,
    paddingY = '2',
    gap = '2'
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected || placeholder);

    const handleOptionClick = (option) => {
        setSelectedOption(option.name); // Update selected value in local state
        onChange(option.value); // Pass selected option to parent
        setDropdownOpen(false); // Close the dropdown
    };

    return (
        <div
            className="relative dropdown w-fit"
            onMouseEnter={() => setDropdownOpen(true)} // Open on hover
            onMouseLeave={() => setDropdownOpen(false)} // Close on hover out
        >
            <button
                className={`flex items-center gap-${gap} capitalize px-4 py-${paddingY} border border-${borderColor} rounded-${roundedValue} bg-${bgColor} w-fit`}
                disabled={disabled}
            >
                {selectedOption}
                <i className="bi bi-caret-down-fill"></i>
            </button>
            {dropdownOpen && (
                <div className={`absolute z-10 min-w-32 ${position} border border-${borderColor} rounded-lg bg-${bgColor} shadow text-white overflow-hidden`}>
                    {options.map((option) => (
                        <button
                            key={option.value}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-black capitalize"
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
