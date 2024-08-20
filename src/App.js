
import React, { useState } from 'react';
import HomePage from "./sections/HomePage";
import Nav from "./sections/Nav";

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
      <section>

      </section>
    </main>
  );
}

export default App;
