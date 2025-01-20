import React from 'react'

const Overlay = ({ children }) => {
    return (
        <div className='fixed top-0 left-0 z-[1000]  w-full h-screen overflow-auto  bg-[#00000095]'>
            {children}
        </div>
    )
}

export default Overlay