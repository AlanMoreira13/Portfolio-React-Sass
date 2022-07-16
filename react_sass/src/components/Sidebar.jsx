import Avatar from "../img/alan.jpg"
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";
const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <img src={Avatar} alt="Alan Moreira" />
        <p className='title'>Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="./src/CV - Alan Moreira.pdf" target="_blank" className='btn'>
            Download currículo
        </a>
    </aside>
  )
}

export default Sidebar