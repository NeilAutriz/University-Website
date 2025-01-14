import NavBar from "./components/NavBar/Navbar"
import Header from "./components/Header/Header"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="main-content-container">
        <Title title='Our Program' desc='What we Offer'/>
        <Programs />
        <About />
        <Title title='Gallery' desc='Campus Photos'/>
        <Gallery />
      </div>
    </>
  )
}

export default App
