
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


export default function Home() {
  return(
    <main className="flex min-h-screen flex-col bg-[#121212]">
         <Navbar/>
      <div className="container mx-auto px-12 py-4">
     <HeroSection/>
     <About/>
     <Skills/>
     <Work/>
     <Contact/>
     <Footer/>
   
     </div>

    </main>
  )
}