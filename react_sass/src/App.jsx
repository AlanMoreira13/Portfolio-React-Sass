import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import SocialNetworks from "./components/SocialNetworks"

import "./styles/components/app.sass"

function App() {

  return (
    <div id="portfolio">
      <h1>Alan Moreira</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
