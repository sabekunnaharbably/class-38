import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <button className={` font-open font-semibold text-[18px]  text-white ${className}`}>{btnText}</button>
  )
}

export default Button