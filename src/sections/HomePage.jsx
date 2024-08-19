import WaveSVG from '../components/waveBackgroundSVG';
import Wavify from 'react-wavify';

const HomePage = () => {
  return (
    <section className='relative w-screen h-screen overflow-hidden bg-background'>
      <Wavify 
        fill="3b4374"
      />
      <div className='relative flex flex-col justify-center items-center h-full'>
        <p className='text-gray-500 text-center'>
          Hello! I am
        </p>

        <h1 className='text-gray-500 text-4xl font-montserrat font-bold'>
          Sye Phasuk
        </h1>
      </div>
      
    </section>
  )
}

export default HomePage;

