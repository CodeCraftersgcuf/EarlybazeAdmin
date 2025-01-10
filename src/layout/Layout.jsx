import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import Profile from './components/Profile';
import { Topbar_profile_Left } from '../dummyData/Data';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <div className="flex bg-theme-light">
                {/* Sidebar */}
                <div
                    className={`fixed lg:static top-0 left-0 z-20 transition-transform transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                        } lg:translate-x-0 lg:w-[25%] w-64`}
                >
                    <Sidebar setMobileOpen={setMobileOpen} />
                </div>
                {/* Main Content */}
                <div
                    className={`w-full min-h-screen transition-all duration-300 `}
                >
                    <div className="">
                        <div className="min-h-[72px] bg-theme-dark flex justify-between items-center p-4 border-l-2 border-[#093826]">
                            <div className='flex items-center gap-2'>
                            <button
                                className="block lg:hidden"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                                click
                            </button>
                               <div className='flex items-center'>
                                    {
                                        Topbar_profile_Left.map((item, index) => {
                                            console.log(index);
                                            return (<img key={index} src={item.profileImage} alt="logo" className={`w-10 h-10 rounded-full ${index != 0 && 'transform -translate-x-1/2'}`} />);
                                        })
                                    }
                               </div>
                            </div>
                            <div className="">
                                {/* give name and img 
                                hey is hardcore
                                 */}
                                <Profile />
                            </div>
                        </div>
                        <div className='p-4 text-white'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
