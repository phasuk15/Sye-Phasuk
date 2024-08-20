
import { waveIcon } from "../assets/icons"

const Nav = ({paused, togglePaused}) => {

  return (
    <header className='padding-x py-8 absolute z-10 w-full'> 
        <nav className='flex justify-between items-center max-container'> 
            <ul className='flex-1 flex justify-end items-center gap-16 text-gray-400'>
              <li>Home</li>
              <li>Projects</li>
              <li>Contacts</li>
              <button onClick={togglePaused}
                className={`px-4 py-2 rounded text-white 
                  ${paused ? 'bg-blue-500' : 'bg-gray-500'} 
                  hover:${paused ? 'bg-blue-700' : 'bg-gray-700'}`}>
                  {/* {paused ? 'Resume Waves' : 'Pause Waves'} */}
                  <img 
                    src={waveIcon}
                    alt='wave-icon'
                    width={30}
                    height={30}
                    className="object-contain"
                  />
              </button>
            </ul>
        </nav>
    </header>
  )
}

export default Nav