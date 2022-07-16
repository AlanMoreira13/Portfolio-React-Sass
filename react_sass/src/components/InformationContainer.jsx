import {AiFillEnvironment, AiTwotoneMail} from "react-icons/ai"
import {FaWhatsapp } from "react-icons/fa"


import "../styles/components/informationcontainer.sass"
const informationContainer = () => {
  return <section id="information">
    <div className="info-card">
        <a href="https://wa.me/5551993590452" target="_blank"><FaWhatsapp id="phone-icon" /></a> 
        <div>
            <h3>Telefone</h3>
            <p>51 993590452</p>
        </div>
    </div>
    <div className="info-card">
        <a href="mailto:moreiraalan22@gmail.com" target="_blank"><AiTwotoneMail id="email-icon" /></a>
        <div>
            <h3>E-mail</h3>
            <p id="meu-email">moreiraalan22@gmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <a href="https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.1088701,-51.1771419,11z/data=!3m1!4b1!4m5!3m4!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0368176!4d-51.2089887" target="_blank"><AiFillEnvironment id="pin-icon" /></a>
        <div>
            <h3>Localização</h3>
            <p>Porto Alegre / RS</p>
        </div>
    </div>
  </section>
}

export default informationContainer