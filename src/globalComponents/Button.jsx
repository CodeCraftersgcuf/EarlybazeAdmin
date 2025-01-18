import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ navigationName = "view all", buttonSize = '',textSize='lg', hanldefunction = () => { console.log('button working from components') } }) => {
    return (
        <button onClick={hanldefunction} className={`bg-theme-dark border text-${textSize} capitalize border-green-800 py-2 px-4 rounded-full text-green-600 font-bold flex items-center gap-2`}>
            {navigationName}
        </button>
    )
}

export default Button
