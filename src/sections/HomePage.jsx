
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';


const HomePage = () => {
  const backgrounds = ['bg-wave1', 'bg-wave2', 'bg-wave3', 'bg-wave4', 'bg-wave5', 'bg-wave6', 'bg-wave7', 'bg-wave8', 'bg-wave9', 'bg-wave10']
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % 10);
    }, 500); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <section className={classNames('absolute inset-0 bg-cover bg-wave1 bg-bottom overflow-hidden bg-no-repeat transition-all',
      backgrounds[currentBackground]
    )}>
      <div className='relative flex justify-center items-center'>
        <h1 className='text-white text-4xl font-montserrat font-bold mt-10'>
          Sye Phasuk
        </h1>
      </div>
    </section>
  )
}

export default HomePage;

