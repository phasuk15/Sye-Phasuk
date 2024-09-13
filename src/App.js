
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import FullGallery from './sections/FullGallery';


function App() {

  const [paused, setPaused] = useState(false);

  const togglePaused = () => {
    setPaused(!paused);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home paused={paused} togglePaused={togglePaused}/>} />
        <Route path="/fullgallery" element={<FullGallery />} /> {/* External Page */}
      </Routes>
    </Router>
  );
}
export default App;
