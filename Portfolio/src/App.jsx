import Navbar from "./components/Navbar"
import AboutMe from "./sections/AboutMe"
import Hero from "./sections/Hero"

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
    </div>
  )
}

export default App
