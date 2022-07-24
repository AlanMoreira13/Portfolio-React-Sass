

import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./styles/components/app.sass"
import Navbar from "./components/Navbar"

// Pages
import Projects from "./pages/Projects/Projects"
import Home from "./pages/Home/Home"

function App() {

  return (
    <div id="portfolio">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="portfolio-deploy/" element={<Home />} />
            <Route path="portfolio-deploy/projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
