import Waves from '../components/Waves';

const HomePage = () => {
  return (
    <section className='relative w-screen h-screen overflow-hidden bg-background-colour'>
      <div className='relative flex flex-col justify-center items-center h-full'>
        <p className='text-gray-500 text-center'>
          Hello! I am
        </p>

        <h1 className='text-gray-300 text-4xl font-montserrat font-bold'>
          Sye Phasuk
        </h1>
      </div>
      <div className='relative h-[50px]'>
        <Waves />
      </div>

    </section>
     
  )
}

export default HomePage;

