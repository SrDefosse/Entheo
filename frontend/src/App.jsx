
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css'
import Hero from './components/home/Hero'
import NiceSlider from './components/home/NiceSlider'
import LookBook from './components/home/LookBook'
import MoreThanJewlery from './components/home/MoreThanJewlery'
import Footer from './components/layout/Footer'
import VideoFrame from './components/home/VideoFrame'
import Gallery from './components/home/Gallery'
import ScrollCarousel from './components/home/ScrollCarousel'

function App() {
  useSmoothScroll();

  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <NiceSlider/>
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
