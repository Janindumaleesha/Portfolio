import Navbar from "./components/Navbar"
import AboutMe from "./sections/AboutMe"
import Hero from "./sections/Hero"
import Timeline from "./sections/Timeline"
import Certificate from "./sections/Certificate"
import ContactMe from "./sections/ContactMe"

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
      <Timeline />
      <Certificate />
      <ContactMe />
    </div>
  )
}

export default App
