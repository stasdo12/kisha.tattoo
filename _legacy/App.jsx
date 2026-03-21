import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import ScrollCursor from './components/ScrollCursor';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/transitions/PageTransition';
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
const GraphicsHome = lazy(() => import('./pages/graphics/GraphicsHome'));
const GraphicsAbout = lazy(() => import('./pages/graphics/GraphicsAbout'));
const GraphicsWorks = lazy(() => import('./pages/graphics/GraphicsWorks'));
const GraphicsContact = lazy(() => import('./pages/graphics/GraphicsContact'));
const GraphicsStories = lazy(() => import('./pages/graphics/GraphicsStories'));
const GraphicsArticle = lazy(() => import('./pages/graphics/GraphicsArticle'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Check if we're on Graphics section
  const isGraphicsSection = location.pathname.startsWith('/graphics');

  return (
    <ThemeProvider>
      {loading && <LoadingScreen />}
      {!isGraphicsSection && <ScrollCursor />}
      <div className="App" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {!isGraphicsSection && (
          <Suspense fallback={<div style={{ height: '100vh', background: 'var(--bg-color)' }} />}>
            <KanjiBackground />
          </Suspense>
        )}
        {!isGraphicsSection && <Navbar />}

        <Routes>
          {/* Home Page - All Landing Sections */}
          <Route path="/" element={
            <PageTransition location={location.pathname}>
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
            </PageTransition>
          } />

          {/* Gallery Page */}
          <Route path="/gallery" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GalleryPage />
              </Suspense>
            </PageTransition>
          } />

          {/* Graphics Section */}
          <Route path="/graphics" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GraphicsHome />
              </Suspense>
            </PageTransition>
          } />
          {/* Graphics About Page */}
          <Route path="/graphics/about" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GraphicsAbout />
              </Suspense>
            </PageTransition>
          } />
          {/* Graphics Works Page */}
          <Route path="/graphics/works" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GraphicsWorks />
              </Suspense>
            </PageTransition>
          } />
          {/* Graphics Contact Page */}
          <Route path="/graphics/contact" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GraphicsContact />
              </Suspense>
            </PageTransition>
          } />
          {/* Graphics Stories Page */}
          <Route path="/graphics/stories" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GraphicsStories />
              </Suspense>
            </PageTransition>
          } />
          {/* Graphics Article Page */}
          <Route path="/graphics/stories/:id" element={
            <PageTransition location={location.pathname}>
              <Suspense fallback={<LoadingScreen />}>
                <GraphicsArticle />
              </Suspense>
            </PageTransition>
          } />
        </Routes>

        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
