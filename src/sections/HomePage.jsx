
import React, { useState, useEffect } from 'react';
import "../App.css";


const HomePage = () => {
  const backgrounds = ['wave-1', 'wave-2', 'wave-3']
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % 3);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <section className='`min-h-screen flex items-center justify-center transition-all duration-1000 ${backgrounds[currentBackground]}`'>
      <div className= "text-2xl font-bold font-montserrat text-center">
         Background Image
      </div>
    </section>
  )
}

export default HomePage;