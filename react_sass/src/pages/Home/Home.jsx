import MainContent from "../../components/MainContent"
import Sidebar from "../../components/Sidebar"
import "./Home.sass"
const Home = () => {
  return (
    <div id="home">
        <Sidebar />
        <MainContent />
    </div>
  )
}

export default Home