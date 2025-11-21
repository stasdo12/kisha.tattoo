import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ScrollAnimationSection from './components/ScrollAnimationSection';
import Services from './components/Services';
import Process from './components/Process';
import RitualAccordion from './components/RitualAccordion';
import AssemblySection from './components/AssemblySection';
import VirtualGallery from './components/VirtualGallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import KanjiBackground from './components/KanjiBackground';
import ScrollCursor from './components/ScrollCursor';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import './styles/index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen />}
      <ScrollCursor />
      <div className="App" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <KanjiBackground />
        <Navbar />
        <Hero />
        <StorySection />
        <ScrollAnimationSection />
        <Services />
        <Process />
        <RitualAccordion />
        <AssemblySection />
        <VirtualGallery />
        <Booking />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
