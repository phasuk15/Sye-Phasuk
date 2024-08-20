
import React, { useState } from 'react';
import Nav from "./sections/Nav";
import HomePage from "./sections/HomePage";
import Aboutme from './sections/Aboutme';
import Projects from './sections/Projects';

function App() {

  const [paused, setPaused] = useState(false);

  const togglePaused = () => {
    setPaused(!paused);
  };

  return (
    <main className="">
      <Nav paused={paused} togglePaused={togglePaused} />
      <section className="">
        <HomePage paused={paused}/>
      </section>
      <section className='bg-wave-blue padding'>
        <Aboutme />
      </section>
      <section className='bg-wave-blue padding'>
      <Projects />
      </section>
    </main>
  );
}
export default App;
