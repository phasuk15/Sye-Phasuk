
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from "./sections/Nav";
import HomePage from "./sections/HomePage";
import Aboutme from './sections/Aboutme';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';


function App() {

  const [paused, setPaused] = useState(false);
  const [fillColor1, setFillColor1] = useState("#645d92"); 
  const [fillColor2, setFillColor2] = useState("#3b4374"); 

  const togglePaused = () => {
    setPaused(!paused);
    setFillColor1(fillColor1 === "#645d92" ? "transparent" : "#645d92");
    setFillColor2(fillColor2 === "#3b4374" ? "transparent" : "#3b4374");
  };

  return (
    <Router>
      <main className="w-screen h-screen">
        <Nav paused={paused} togglePaused={togglePaused} />
        <section className="">
          <HomePage paused={paused}/>
        </section>
        <section className='bg-wave-blue padding'>
          <Aboutme />
        </section>
        <section className='bg-wave-blue '>
          <Projects />
        </section>
        <section className='bg-black'>
          <Gallery />
        </section>
        <section className='bg-black'>
          <Footer />
        </section>
      </main>
    </Router>
  );
}
export default App;
