
import useSmoothScroll from './hooks/useSmoothScroll';
import './App.css'
import Hero from './components/home/Hero'
import NiceSlider from './components/home/NiceSlider'
import LookBook from './components/home/LookBook'
import MoreThanJewlery from './components/home/MoreThanJewlery'
import Footer from './components/layout/Footer'

function App() {
  useSmoothScroll();

  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <MoreThanJewlery/>
      </div>
      <div>
        <LookBook/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
