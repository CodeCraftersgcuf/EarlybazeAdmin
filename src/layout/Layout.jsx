import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <div className="flex bg-theme-light">
                {/* Sidebar */}
                <div
                    className={`fixed lg:static top-0 left-0 z-20 transition-transform transform ${
                        mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:w-[20%] w-64`}
                >
                    <Sidebar setMobileOpen={setMobileOpen} />
                </div>
                {/* Main Content */}
                <div
                    className={`w-full min-h-screen transition-all duration-300 `}
                >
                    <div className="">
                        <div className="bg-theme-dark flex justify-between items-center p-4 mb-4">
                            <button
                                className="block lg:hidden"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                                click
                            </button>
                            <button
                                className="hidden lg:block opacity-0 cursor-default"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                            <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-user text-xl text-white"></i>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
