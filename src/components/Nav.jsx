import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <div className='px-8 py-2 fixed'>
        <div>
            <img src={logo} alt="" className='w-20' />
        </div>
    </div>
  )
}

export default Nav