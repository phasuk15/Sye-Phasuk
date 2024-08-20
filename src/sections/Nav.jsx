
import WaveIcon from "../components/waveIcon"

const Nav = ({paused, togglePaused}) => {

  return (
    <header className='padding-x py-8 absolute z-10 w-full'> 
        <nav className='flex justify-between items-center max-container'> 
            <ul className='flex-1 flex justify-end items-center gap-16 text-gray-400'>
              <li>Home</li>
              <li>About me</li>
              <li>Projects</li>
              <li>Contacts</li>
              <button onClick={togglePaused}
                className={`px-4 py-2 rounded-full text-white 
                  ${paused ? 'bg-none' : 'bg-'} 
                  hover:bg-gray-700`}>
                  <WaveIcon 
                    className="w-7 h-7"
                  />
              </button>
            </ul>
        </nav>
    </header>
  )
}

export default Nav