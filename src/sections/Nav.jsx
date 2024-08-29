
import WaveIcon from "../components/icons/waveIcon"
import hamburger from "../assets/icons/hamburger.svg"
import { Link } from 'react-router-dom';


const Nav = ({paused, togglePaused}) => {

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
            <ul className='flex-1 flex justify-end items-center gap-16 text-gray-400 max-md:hidden'>
              <Link to='/HomePage' className="">Home</Link>
              <button>About me</button>
              <button>Projects</button>
              <button>Gallery</button>
            </ul> 
            <button className='hidden max-md:block'>
              <img
                src = {hamburger}
                alt="hamburger"
                width={25}
                height={25}
              >
              </img>
            </button>
        </nav>
    </header>
  )
}

export default Nav