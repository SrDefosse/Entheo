import { useEffect } from 'react';
import Lenis from 'lenis';

import './App.css'
import Hero from './components/home/Hero'
import LookBook from './components/home/LookBook'
import MoreThanJewlery from './components/home/MoreThanJewlery'
import Footer from './components/layout/Footer'
import VideoFrame from './components/home/VideoFrame'
import Gallery from './components/home/Gallery'
import ScrollCarousel from './components/home/ScrollCarousel'
import Navbar from './components/layout/Navbar'
import ScrollReveal from './components/home/ScrollReveal'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (

    <div>
      <Navbar/>
      <div>
        <Hero/>
      </div>
      <div>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          Recuerda que cada una de tus compras contribuye a una causa social para ayudar a personas en situación de vulnerabilidad.
        </ScrollReveal>
      </div>
      <div>
        <ScrollCarousel/>
      </div>
      <div>
        <MoreThanJewlery/>
      </div>
      <div>
        <LookBook/>
      </div>
      <div>
        <VideoFrame/>
      </div>
      <div>
        <Gallery/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
