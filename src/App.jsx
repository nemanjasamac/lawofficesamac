import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ClientReferences from './components/ClientReferences';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About';
import OblastiPrava from './pages/OblastiPrava';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ClientReferences />
      <ContactUs />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    const assetsToLoad = [
      '/images/hero-bg.jpg',
      '/images/about-us.jpg',
      '/images/about-hero.jpg',
      '/images/our-story.jpg',
      '/images/approach-1.png',
      '/images/approach-2.png',
      '/images/oblasti-hero.jpg',
      ...Array.from(document.querySelectorAll('img')).map(img => img.src),
    ].filter(Boolean);
    
    let loadedAssets = 0;
    const totalAssets = assetsToLoad.length;
    
    const minLoadingTime = 2000;
    const startTime = Date.now();
    
    const updateProgress = () => {
      loadedAssets++;
      const assetProgress = Math.round((loadedAssets / totalAssets) * 100);
      setLoadingProgress(assetProgress);
      if (loadedAssets === totalAssets) {
        const elapsed = Date.now() - startTime;
        if (elapsed >= minLoadingTime) {
          completeLoading();
        } else {
          setTimeout(completeLoading, minLoadingTime - elapsed);
        }
      }
    };
    
    const completeLoading = () => {
      setLoadingProgress(100);
      setTimeout(() => setIsLoading(false), 600);
    };
    
    assetsToLoad.forEach(asset => {
      if (asset.includes('.woff') || asset.includes('.woff2') || asset.includes('.ttf')) {
        const font = new FontFace('CustomFont', `url(${asset})`);
        font.load().then(updateProgress).catch(updateProgress);
      } else {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress; 
        img.src = asset;
      }
    });
    
    const fallbackTimer = setTimeout(() => {
      if (isLoading) completeLoading();
    }, 10000); 
    
    return () => {
      clearTimeout(fallbackTimer);
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);
  
  return (
    <>
      {isLoading && <LoadingScreen progress={loadingProgress} />}
      <div className={`min-h-screen bg-bg-primary text-text-primary transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Router>
          <ScrollToTop /> 
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/istorija" element={<About />} />
            <Route path="/oblasti" element={<OblastiPrava />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
