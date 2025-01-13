import React from 'react'

const AddingButton = ({icon,handlefunction,title}) => {
  return (
    <button onClick={handlefunction} className='bg-[#25AE7A] p-2 px-4 rounded-lg flex items-center gap-2'>
        {icon && <i className={`${icon} 2xl`}></i>}
        <span className='text-white capitalize'>{title}</span>
    </button>
  )
}

export default AddingButton
