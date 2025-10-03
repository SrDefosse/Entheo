import Hero from '../components/home/Hero'
import LookBook from '../components/home/LookBook'
import MoreThanJewlery from '../components/home/MoreThanJewlery'
import VideoFrame from '../components/home/VideoFrame'
import Gallery from '../components/home/Gallery'
import ScrollCarousel from '../components/home/ScrollCarousel'
import ScrollReveal from '../components/home/ScrollReveal'

function Home() {
  return (
    <main>
      <div>
        <Hero/>
      </div>
      <div>
        <ScrollReveal/>
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
    </main>
  )
}

export default Home


