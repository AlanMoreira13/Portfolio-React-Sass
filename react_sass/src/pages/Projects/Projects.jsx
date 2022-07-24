// CSS
import "./Projects.sass"

// Icons
import {FaBootstrap, FaCss3, FaGithubSquare, FaHtml5, FaJs, FaJsfiddle, FaJsSquare, FaReact} from "react-icons/fa"
import {SiFirebase, SiMongodb} from "react-icons/si"
import {TbApi} from "react-icons/tb"

// import images
import siteBarber from "../../img/site-barber.png"
import miniBlog from "../../img/mini-blog.png"
import reactgram from "../../img/reactgram.png"
import buscaCep from "../../img/busca-cep.png"
import darkMode from "../../img/dark-mode.png"
import jokenpo from "../../img/jokenpo.png"
import quizz from "../../img/quizz.png"
import todo from "../../img/todo.png"
import calcImc from "../../img/calc-imc.png"
import player from "../../img/player-7mz.png"
import drumKit from "../../img/drumkit.png"
import formVerif from "../../img/form-verif.png"
import memoryGame from "../../img/memory-game.png"


const Projects = () => {

function handleClick() {
 document.querySelector(".container-projetos-grade").classList.toggle("hide")
}

  return (
          
      <div className="container-projetos-grade">
  
        <div className="container-projeto-individual">
          <a href="https://github.com/AlanMoreira13/React-Mini-Blog/blob/main/README.md" target="_blank"><img src={miniBlog} alt="" /></a>
          <div className="container-info">
            <div className="container-techs">
              <FaReact className="icon i-react" />
              <SiFirebase className="icon i-firebase" />
            </div>
            <p>Mini Blog</p>
            <a href="https://github.com/AlanMoreira13/React-Mini-Blog" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://github.com/AlanMoreira13/Projeto-ReactGram/blob/main/README.md" target="_blank"><img src={reactgram} alt="ReactGram" /></a>
          <div className="container-info">
            <div className="container-techs">
              <FaReact className="icon i-react" />
              <SiMongodb className="icon i-mongo" />
          
            </div>
            <p>ReactGram</p>
            <a href="https://github.com/AlanMoreira13/Projeto-ReactGram" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/busca-cep/"><img src={buscaCep} alt="Busca Cep" /></a>
          <div className="container-info">
            <div className="container-techs">
              <FaReact className="icon i-react" />
              <TbApi className="icon i-api" />
            </div>
            <p>Busca Cep</p>
            <a href="https://github.com/AlanMoreira13/busca-cep" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
         <a href="https://alanmoreira13.github.io/Site-Barbearia-com-Bootstrap/"><img src={siteBarber} alt="Site Barbearia" /></a>
          <div className="container-info">
            <div className="container-techs"><FaBootstrap className="icon i-bootstrap" /></div>
            <p>Site Barbearia</p>
            <a href="https://github.com/AlanMoreira13/Site-Barbearia-com-Bootstrap" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
        
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/Landing-page-Dark-Mode/"><img src={darkMode} alt="Dark Mode" /></a>
          <div className="container-info">
            <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Dark Mode</p>
            <a href="https://github.com/AlanMoreira13/Landing-page-Dark-Mode" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/Memory-game/" target="_blank"><img src={memoryGame} alt="Jogo da memória" /></a>
          <div className="container-info">
            <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Jogo da Memória</p>
            <a href="https://github.com/AlanMoreira13/Memory-game" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/Desafio-DojoPuzzles-Jokenpo/" target="_blank"><img src={jokenpo} alt="Jokenpô" /></a>
          <div className="container-info">
            <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Jokenpô</p>
            <a href="https://github.com/AlanMoreira13/Desafio-DojoPuzzles-Jokenpo" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
  
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/Quizz-Javascript/" target="_blank"><img src={quizz} alt="Quizz" /></a>
          <div className="container-info">
          <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Quizz</p>
            <a href="https://github.com/AlanMoreira13/Quizz-Javascript" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/to-do-list/"><img src={todo} alt="To-do List" /></a>
          <div className="container-info">
          <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>To-do List</p>
            <a href="https://github.com/AlanMoreira13/to-do-list/" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/Calculadora-IMC/" target="_blank"><img src={calcImc} alt="Calculadora IMC" /></a>
          <div className="container-info">
          <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Calculadora IMC</p>
            <a href="https://github.com/AlanMoreira13/Calculadora-IMC" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/verification-form/" target="_blank"><img src={formVerif} alt="Verificação de formulário" /></a>
          <div className="container-info">
          <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Auth Form</p>
            <a href="https://github.com/AlanMoreira13/verification-form" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/PlayerDeMusicas/" target="_blank"><img src={player} alt="Player 7MZ" /></a>
          <div className="container-info">
          <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Player 7MZ</p>
            <a href="https://github.com/AlanMoreira13/PlayerDeMusicas" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
  
        <div className="container-projeto-individual">
          <a href="https://alanmoreira13.github.io/Mini-Drum-Kit/" target="_blank"><img src={drumKit} alt="Drum Kit" /></a>
          <div className="container-info">
          <div className="container-techs">
              <FaHtml5 className="icon i-html" />
              <FaCss3 className="icon i-css" />
              <FaJsSquare className="icon i-js" />
            </div>
            <p>Mini Drum-Kit</p>
            <a href="https://github.com/AlanMoreira13/Mini-Drum-Kit" target="_blank">
              <FaGithubSquare className="icon i-github" />
            </a>
          </div>
        </div>
        
        
      </div>
    
  )
}

export default Projects