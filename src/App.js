import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollTop from './components/ScrollTop';
import Nav from './sections/Nav';
import HomePage from './sections/HomePage';
import Aboutme from './sections/Aboutme';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';
import FullGallery from './sections/FullGallery';
import Footer from './sections/Footer';
import { useState } from 'react';

function App() {

  const [paused, setPaused] = useState(false);

  const togglePaused = () => {
    setPaused(!paused);
  };


  return (
    <Router>
      <ScrollTop/>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={
          <main className='h-screen w-screen'>
            <Nav paused={paused} togglePaused={togglePaused}/>
            <section id="home"><HomePage paused={paused}/></section>
            <section id="about"><Aboutme /></section>
            <section id="projects"><Projects /></section>
            <section id="gallery"><Gallery /></section>
            <section id="footer"><Footer /></section>
          </main>
        } />
        
        {/* Full Gallery Route */}
        <Route path="/FullGallery" element={<FullGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
