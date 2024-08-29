import Waves from '../components/Waves';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      </div>
      <div className='relative h-[50px]'>
        <Waves paused={paused}/>
      </div>

    </section>
     
  )
}

export default HomePage;

