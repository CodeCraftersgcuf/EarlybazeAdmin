import React from 'react'

const UniversalBtn = ({
  title,
  handleFunction,
  className,

}) => {
  return (
    <button className={`capitalize ${className}`} onClick={handleFunction}>{title}</button>
  )
}

export default UniversalBtn
