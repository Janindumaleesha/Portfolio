import Navbar from "./components/Navbar"
import AboutMe from "./sections/AboutMe"
import Hero from "./sections/Hero"
import Timeline from "./sections/Timeline"
import Certificate from "./sections/Certificate"
import ContactMe from "./sections/ContactMe"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Footer from "./components/Footer"

function App() {

  return (
    // < >
    //   {/* <Hero />
    //   <AboutMe /> */}
    //   <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
    //     <Navbar />
    //   {/* rest of your content */}
    //   </div>
    // </>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Timeline />
      <Certificate />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
