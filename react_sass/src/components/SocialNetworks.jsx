import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

// const socialNetworks = [
//     { name: "linkedin", icon: <FaLinkedinIn />},
//     { name: "github", icon: <FaGithub />},
//     { name: "instagram", icon: <FaInstagram />},
// ]

const SocialNetworks = () => {
  return (<section id="social-networks">
    {/* {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
         </a>
    ))} */}
    <a href="https://www.linkedin.com/in/alann-moreira/" target="_blank" className="social-btn" id="linkedin" key="linkedin">
      <FaLinkedinIn />
        </a>
    <a href="https://github.com/AlanMoreira13" target="_blank" className="social-btn" id="github" key="github">
    <FaGithub />
        </a>
    <a href="https://www.instagram.com/alannmoreiraa/" target="_blank" className="social-btn" id="instagram" key="instagram">
    <FaInstagram />
        </a>
  </section>
  )
}

export default SocialNetworks