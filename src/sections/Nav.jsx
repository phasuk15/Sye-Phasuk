
import WaveIcon from "../components/icons/waveIcon"
import hamburger from "../assets/icons/hamburger.svg"
import { useState } from "react";import { HashLink as Link } from 'react-router-hash-link';
import Sidebar from "../components/Sidebar";


const Nav = ({paused, togglePaused}) => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='fixed top-0 padding-x py-5 z-50 left-0 w-full backdrop-blur-md'> 
        <nav className='flex justify-between items-center max-container z-50'> 
            <button onClick={togglePaused}
              className={`px-4 py-2 rounded-full text-white 
                ${paused ? 'bg-none' : 'bg-'} 
                hover:bg-gray-700`}>
                <WaveIcon 
                  className="w-7 h-7"
                  
                />
            </button>
            <ul className='flex-1 flex justify-end items-center gap-16 text-gray-400 max-md:hidden '>
              <Link to="/#home" smooth={true} duration={500} className="hover:text-white cursor-pointer">Home</Link>
              <Link to="/#about" smooth={true} duration={500} className="hover:text-white cursor-pointer">About me</Link>
              <Link to="/#projects" smooth={true} duration={500} className="hover:text-white cursor-pointer">Projects</Link>
              <Link to="/#gallery" smooth={true} duration={500} className="hover:text-white cursor-pointer">Gallery</Link>
          </ul>
            <button className='hidden max-md:block' onClick={toggleSidebar}>
              <img
                src = {hamburger}
                alt="hamburger"
                width={25}
                height={25}
              >
              </img>
            </button>
            {isSidebarOpen && (
              <Sidebar />
            )}
        </nav>
    </header>
  )
}

export default Nav