import React from 'react'
import logo from '../../assets/images/logo.png'

const Profile = ({name = 'Admin',img = logo}) => {
    return (
        <div className='flex items-center gap-4 text-white'>
            <div>
                <h4 className='text-lg'>Hey,</h4>
                <h2 className='text-xl'>{name}</h2>
            </div>
            <img src={img} alt="profile" className='w-14 h-14 rounded-full' />
        </div>
    )
}

export default Profile
