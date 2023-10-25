import "./app.scss"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Parallax from "./components/Parallax/Parallax"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import Cursor from "./components/Cursor/Cursor"
function App() {

  return (
    <div>
    <Cursor/>
      <section id="Homepage" >
      <Navbar/>
      <Hero/>
      </section>
      <section id="Services" ><Parallax type="services" /> </section>
      <section  > <Services/> </section>
      <section id="Portfolio" ><Parallax type="portfolio" /></section>
      <Portfolio/>
      <section id="Contact" > <Contact/>
       </section>
    </div>
  )
}

export default App
