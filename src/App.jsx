import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import ScrollCursor from './components/ScrollCursor';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import './styles/index.css';

// Lazy load heavy components
const StorySection = lazy(() => import('./components/StorySection'));
const ScrollAnimationSection = lazy(() => import('./components/ScrollAnimationSection'));
const Process = lazy(() => import('./components/Process'));
const RitualAccordion = lazy(() => import('./components/RitualAccordion'));
const AssemblySection = lazy(() => import('./components/AssemblySection'));
const MasterProfile = lazy(() => import('./components/MasterProfile'));
const VirtualGallery = lazy(() => import('./components/VirtualGallery'));
const Booking = lazy(() => import('./components/Booking'));
const Footer = lazy(() => import('./components/Footer'));
const KanjiBackground = lazy(() => import('./components/KanjiBackground'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

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
        <Suspense fallback={<div style={{ height: '100vh', background: 'var(--bg-color)' }} />}>
          <KanjiBackground />
        </Suspense>
        <Navbar />

        <Routes>
          {/* Home Page - All Landing Sections */}
          <Route path="/" element={
            <Suspense fallback={<div style={{ height: '100vh' }} />}>
              <Hero />
              <StorySection />
              <ScrollAnimationSection />
              <Process />
              <RitualAccordion />
              <AssemblySection />
              <MasterProfile />
              <VirtualGallery />
              <Booking />
              <Footer />
            </Suspense>
          } />

          {/* Gallery Page */}
          <Route path="/gallery" element={
            <Suspense fallback={<LoadingScreen />}>
              <GalleryPage />
            </Suspense>
          } />
        </Routes>

        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
