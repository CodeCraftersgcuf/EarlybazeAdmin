import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import LinkComp from './components/Link';
import logo from '../assets/images/logo.png';
import { Sidebar_links } from '../dummyData/Data';

const Sidebar = ({ setMobileOpen }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = React.useState('/dashboard');


    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className="bg-theme-dark text-white overflow-auto h-screen">
            {/* Close button for mobile */}
            <div className="flex justify-end lg:hidden">
                <button
                    className="text-xl cursor-pointer mx-4 mt-2"
                    onClick={() => setMobileOpen(false)}
                >✕</button>
            </div>
            {/* Sidebar content */}
            <div className="pl-4 flex items-center min-h-[72px] border-b-2 border-[#093826]">
                <Link to='/dashboard'>
                    <h1 className='text-xl md:text-2xl text-white font-extrabold flex items-center gap-2  w-full'>
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                        EarlyBaze
                    </h1>
                </Link>
            </div>
            {/* Menu */}
            <div className="pt-4 ">
                <nav className="flex flex-col gap-4">
                    {Sidebar_links.map((x, index) => (
                        <LinkComp
                            key={index}
                            name={x.name}
                            link={x.link}
                            icon={x.icon}
                            sub={x.sublinks}
                            isActiveCheck={activeLink === x.link} // Pass isActive prop
                            onClick={() => setActiveLink(x.link)} // Set active link on click
                        />
                    ))}
                </nav>
            </div>
            <div className='p-4 border-t-2 border-[#093826] mt-4'>
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
