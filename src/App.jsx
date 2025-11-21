import React from 'react';
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
import { ThemeProvider } from './context/ThemeContext';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
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
