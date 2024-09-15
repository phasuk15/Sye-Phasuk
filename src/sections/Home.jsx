
import React, { useState } from 'react';
import Nav from "./Nav";
import HomePage from "./HomePage";
import Aboutme from './Aboutme';
import Projects from './Projects';
import Gallery from './Gallery';
import Footer from './Footer';


const Home = () => {

  const [paused, setPaused] = useState(false);

  const togglePaused = () => {
    setPaused(!paused);
  };

  return (
    <main className="w-screen h-screen">
        <Nav paused={paused} togglePaused={togglePaused} />
        <section id="home" className="">
            <HomePage paused={paused}/>
        </section>
        <section id="about" className='bg-wave-blue padding'>
            <Aboutme />
        </section>
        <section id="projects" className='bg-wave-blue '>
            <Projects />
        </section>
        <section id="gallery" className='flex bg-gradient-to-b from-deep-blue to-background-colour'>
            <Gallery />
        </section>
        <section id="footer" className='bg-black'>
            <Footer />
        </section>
    </main>
  );
}
export default Home;
