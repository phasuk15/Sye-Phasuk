import Waves from '../components/Waves';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LinkedInIcon from '../components/icons/LinkedIn'
import YoutubeIcon from '../components/icons/YouTubeIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import GithubIcon from '../components/icons/GithubIcon'

const HomePage = ({paused}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <section className=' w-screen h-screen overflow-hidden bg-background-colour'>
      <div className='relative flex flex-col justify-center items-center h-full'>
        <p className='text-gray-500 text-center font-fira text-xl'>
          Hello! I am
        </p>

        <h1 data-aos="fade-up" data-aos-once="false" className='text-gray-300 text-5xl font-montserrat font-bold '>
          Sye Phasuk
        </h1>
        <div>
          <button className='mt-5 flex flex-wrap gap-10'>
            <LinkedInIcon size={25} fill={"#ababab"} />
            <GithubIcon size={25} fill={"#ababab"}/>
            <InstagramIcon size={25} fill={"#ababab"}/>
            <YoutubeIcon size={25} fill={"#ababab"}/>
          </button>
        </div>
      </div>
      <div className='relative h-[50px]'>
        <Waves paused={paused}/>
      </div>

    </section>
     
  )
}

export default HomePage;

