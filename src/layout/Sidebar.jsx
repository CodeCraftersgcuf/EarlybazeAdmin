import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import LinkComp from './components/Link';

const Sidebar = ({ setMobileOpen }) => {
    const location = useLocation(); // Get the current location
    const [activeLink, setActiveLink] = React.useState('/dashboard'); // Default active link is '/dashboard'

    const links = [
        {
            "name": 'dashboard',
            "link": '/dashboard',
            "icon": 'bxs-dashboard'
        },
        {
            "name": 'transactions',
            "link": '/transactions',
            "icon": 'bx-transfer-alt'
        },
        {
            "name": 'make bill payment',
            "link": '/bill/payment',
            "icon": 'bxs-wallet'
        },
        {
            "name": 'fund wallet',
            "link": '/fund/wallet',
            "icon": 'bx-wallet'
        },
        {
            "name": 'Virtual Card',
            "link": '/virtual/card',
            "icon": 'bxs-credit-card-front'
        },
        {
            "name": 'Edit Profile',
            "link": '/profile',
            "icon": 'bx-user-circle'
        },
        {
            "name": 'Nodifications',
            "link": '/notifications',
            "icon": 'bxs-bell-ring'
        },
        {
            "name": 'Security',
            "link": '/security',
            "icon": 'bxs-check-shield'
        },
        {
            "name": 'Help Center',
            "link": '/help-center',
            "icon": 'bx-info-circle'
        },
        {
            "name": 'Privacy Policy',
            "link": '/privacy-policy',
            "icon": 'bxs-lock'
        },
    ];

    React.useEffect(() => {
        // Update active link based on the current location
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className="bg-theme-dark text-white border-r overflow-auto h-screen">
            {/* Close button for mobile */}
            <div className="flex justify-end lg:hidden">
                <button
                    className="text-xl cursor-pointer mx-4 mt-2"
                    onClick={() => setMobileOpen(false)}
                >✕</button>
            </div>
            {/* Sidebar content */}
            <div className="px-4 pt-4 flex items-center">
                <h1 className='text-xl md:text-2xl text-white font-extrabold'>
                    BILL <span className='font-normal'>PAY</span>
                </h1>
            </div>
            {/* Menu */}
            <div className="px-4 pt-4 ">
                <nav className="flex flex-col gap-3">
                    {links.map((x, index) => (
                        <LinkComp
                            key={index}
                            name={x.name}
                            link={x.link}
                            icon={x.icon}
                            isActive={activeLink === x.link} // Pass isActive prop
                            onClick={() => setActiveLink(x.link)} // Set active link on click
                        />
                    ))}
                </nav>
            </div>
            <div className='p-4'>
                <button
                    className='bg-white flex items-center justify-start py-2 px-2 gap-2 text-black font-bold rounded-lg w-full'
                >
                    <i className='bx bx-log-in-circle text-4xl text-red-700'></i> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;