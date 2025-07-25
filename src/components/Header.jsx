import React from 'react'
import { Link } from 'react-router-dom'
import ToggleDarkMode from './ToggleDarkMode'

const Header = () => {
  return (
    <div className='mb-3 w-full flex justify-between items-center gap-2 font-semibold z-20'>
        <Link to="/" className='flex items-center gap-2'>
            <img src="favicon.ico" className='h-7 w-7' alt="" />
            World Clock App
        </Link>

        <nav className='flex items-center gap-2'>
            <Link to="/about" className='cursor-pointer'>About</Link>
            <ToggleDarkMode />
        </nav>
    </div>
  )
}

export default Header