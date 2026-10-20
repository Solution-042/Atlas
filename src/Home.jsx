import Navbar from './Navbar'
import Hero from './Hero'
import Cards from './Cards'
import Exp from './Explore'
import About from './About_Us'
import Footer from './Footer'


export default function Home() {
  return (
    
    <section className=" bg-[url('./assets/bg-hero.jpg')] bg-cover bg-center h-110">
      <Navbar />
      <Hero />
      <Cards />
      <Exp />
      <About />
      <Footer />
    </section>
    
  )
}