import React, { useState, useRef, useEffect } from 'react';

const MoreDropdown = ({
    iconClass = "bi bi-three-dots-vertical",
    dropdownClass = "",
    buttonClass = "",
    menuClass = "",
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div
            className={`relative w-fit ${dropdownClass}`}
            ref={dropdownRef}
        >
            {/* Dropdown Trigger Button */}
            <button
                className={`border w-10 h-10 flex items-center justify-center rounded-lg ${buttonClass}`}
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <i className={iconClass}></i>
            </button>

            {/* Dropdown Content */}
            {isOpen && (
                <div
                    className={`absolute top-[88%] mt-2 z-40 right-0 overflow-hidden shadow-md shadow-gray-900 rounded-md ${menuClass}`}
                >
                    {children ? (
                        <div className="">{children}</div>
                    ) : (
                        <div className="px-4 py-2 text-gray-500">No content available</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MoreDropdown;
