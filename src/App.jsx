import NavBar from "./components/NavBar/Navbar"
import Header from "./components/Header/Header"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import About from "./components/About/About"

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="main-content-container">
        <Title title='Our Program' desc='What we Offer'/>
        <Programs />
        <About />

      </div>
    </>
  )
}

export default App
