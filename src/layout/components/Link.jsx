import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkComp = ({ name, link, sub = [], isActiveCheck,icon, onClick }) => {
    const location = useLocation(); // Get the current location (URL path)
    const [isActive, setIsActive] = React.useState(isActiveCheck);

    React.useEffect(() => {
        // Check if the current location matches the main link or any sublink
        if (location.pathname === link || sub.some(subItem => location.pathname === subItem.link)) {
            setIsActive(true); // Set isActive to true if main link or any sublink matches the current path
        } else {
            setIsActive(false); // Otherwise, set it to false
        }
    }, [location.pathname, link, sub]);

    return (
        <>
            <div>
                <div className='px-4 relative'>
                    {isActive ? <div className='absolute left-0 top-0 h-full bg-[#257355] w-2 rounded'></div> : ''}
                    <Link
                        to={link}
                        onClick={onClick}
                        className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer  ${isActive ? 'bg-gradient-to-r from-[#093826] to-[#257355]' : 'hover:bg-gradient-to-r hover:from-[#093826] hover:to-[#257355]'}`}
                    >
                        <div className='flex items-center gap-3'>
                            <i className={`${icon} 2xl`}></i>
                            <span className="capitalize font-semibold">{name}</span>
                        </div>
                        {sub.length > 0 && (
                            <i class="bi bi-plus-square 2xl"></i>
                        )}
                    </Link>
                </div>
                {isActive && sub.length > 0 && (
                    <div className='sublinks flex flex-col pl-14 gap-2 mt-4 animate-slide-down'>
                        {sub.map((item, index) => (
                            <Link to={item.link} key={index}>
                                <div className={`flex items-center gap-2 text-lg ${location.pathname === item.link ? 'text-[#44efad]' : ''}`}>
                                    <i className={`${item.icon} 2xl`}></i>
                                    <span className="capitalize font-semibold">{item.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default LinkComp;
