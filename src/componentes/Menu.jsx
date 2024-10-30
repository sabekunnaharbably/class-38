import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
        <li className={` font-open font-semibold text-[18px] mr-2 ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu