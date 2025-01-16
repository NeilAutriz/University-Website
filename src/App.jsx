import NavBar from "./components/NavBar/Navbar"
import Header from "./components/Header/Header"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import { useState } from "react"

function App() {

  const [playVid, setPlayVid] = useState(false);

  const handlePlayingVideo = () => {
    playVid ? setPlayVid(false) : setPlayVid(true)
    console.log(playVid);
  }

  return (
    <>
      <NavBar />
      <Header />
      <div className="main-content-container">
        <Title title='Our Program' desc='What we Offer'/>
        <Programs />
        <About handlePlayingVideo={handlePlayingVideo}/>
        <Title title='Gallery' desc='Campus Photos'/>
        <Gallery />
        <Title title='Testimonials' desc='Feedback of Students' />
        <Testimonials />
        <Title title='Contact us' desc='Get in touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVid={playVid} setPlayVid={setPlayVid}/>
    </>
  )
}

export default App
