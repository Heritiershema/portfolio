import { BrowserRouter, Routes, Route } from "react-router"

import Navbar from "./Components/Navbar"
import Objectives from "./Pages/Objectives"

import AdditionalInformation from "./Pages/AdditionalInformation"
import Home from "./Components/Home.jsx"
import AboutMe from "./Pages/AboutMe.jsx"
import ContactMe from "./Pages/ContactMe.jsx"
import Skills from "./Pages/Skills.jsx"



const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
         <Route path="contactme" element={<ContactMe/>} />
          {/* <Route path="Additional-Information" element={<AdditionalInformation />} /> */}
          <Route path="objectives" element={<Objectives />} />
          <Route path="skills" element={<Skills />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
