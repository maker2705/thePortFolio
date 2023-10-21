import "./app.scss"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <div>
      <section id="Homepage" >
      <Navbar/>
      </section>
      <section>Parallax</section>
      <section id="Services" >Services</section>
      <section>Parallax</section>
      <section id="Portfolio" >Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact" >Contact</section>
    </div>
  )
}

export default App
