import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CustomPiece from './pages/CustomPiece'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollToTop from './hooks/useScrollToTop'

function App() {
  useSmoothScroll();
  useScrollToTop();

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/custom-piece" element={<CustomPiece/>} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
