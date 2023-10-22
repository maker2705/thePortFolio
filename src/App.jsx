import "./app.scss"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Parallax from "./components/Parallax/Parallax"


function App() {

  return (
    <div>
      <section id="Homepage" >
      <Navbar/>
      <Hero/>
      </section>
      <section id="Services" ><Parallax type="services" /> </section>
      <section  >Services</section>
      <section id="Portfolio" ><Parallax type="portfolio" /></section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact" >Contact</section>
    </div>
  )
}

export default App
