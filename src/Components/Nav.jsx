import React from 'react'
import logo from '../Assets/images/album.png'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    
    <nav className='px-10 py-3 bg-[#c09cfa] flex items-center gap-4'>
        <img className='w-8' src={logo} alt="logo" />
        <NavLink to='/' className='font-semibold '>PhotoPholio</NavLink>
    </nav>
    
  )
}

export default Nav
