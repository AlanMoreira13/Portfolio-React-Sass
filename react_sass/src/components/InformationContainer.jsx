import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"


import "../styles/components/informationcontainer.sass"
const informationContainer = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>51 993590452</p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>moreiraalan22@gmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>Porto Alegre / RS</p>
        </div>
    </div>
  </section>
}

export default informationContainer