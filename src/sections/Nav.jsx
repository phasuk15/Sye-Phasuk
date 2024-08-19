import React from 'react'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'> 
        <nav className='flex justify-between items-center max-container'> 
            <ul className='flex-1 flex justify-end items-center gap-16 text-gray-400'>
              <li>Home</li>
              <li>Projects</li>
              <li>Contacts</li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav