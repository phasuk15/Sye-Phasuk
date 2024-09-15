import copyright from "../assets/icons/copyright.svg"

import LinkedInIcon from '../components/icons/LinkedIn'
import YoutubeIcon from '../components/icons/YouTubeIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import GithubIcon from '../components/icons/GithubIcon'


const Footer = () => {
  return (
    <section className="text-gray-600 max-container flex flex-col justify-center items-center bg-black">
        <p className="text-montserrat text-gray-400 pt-5 font-bold">
          Contact me
        </p>
        <div className="pb-6">
          <button className='mt-5 flex flex-wrap gap-10 text-primary'>
            <LinkedInIcon fill="gray" size={20}/>
            <GithubIcon fill="gray" size={20}/>
            <InstagramIcon fill="gray" size={20}/>
            <YoutubeIcon fill="gray" size={20}/>
          </button>
        </div>
        <p className="text-gray-500 text-montserrat">
          Email: phasukdianas15@gmail.com
        </p>
        <div className="flex items-center gap-2 font-montserrat cursor-pointer mt-3">
            <img 
              src={copyright}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"            
            />
            <p>Copyright Sye Phasuk. 2024 All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer