import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoleManagement = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex items-center justify-between gap-4 mb-8'>
                <div className='flex items-center gap-4'>
                    <div onClick={() => navigate(-1)} className='flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]'>
                        <i className="bi bi-chevron-left text-xl"></i>
                    </div>
                    <h1 className='text-4xl font-bold'>Manage Roles</h1>
                </div>
                <button className='bg-[#25AE7A] py-2 px-4 rounded-lg'>Create Role</button>
            </div>
        </>
    )
}

export default RoleManagement
