import React from 'react'

const DetailBox = ({heading,value}) => {
  return (
    <div className='bg-theme-light rounded-lg p-8 flex flex-col justify-between items-center min-h-36 gap-4'>
        <h1 className='text-xl capitalize text-center'>{heading}</h1>
        <h1 className='text-4xl font-bold text-center'>{value}</h1>
    </div>
  )
}

export default DetailBox
