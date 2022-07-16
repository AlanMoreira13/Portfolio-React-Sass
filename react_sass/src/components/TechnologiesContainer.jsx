import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiBootstrap,
} from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />},
    { id: "css", name: "CSS3", icon: <DiCss3 />},
    { id: "js", name: "Javascript", icon: <DiJsBadge />},
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
    { id: "react", name: "React", icon: <DiReact />},
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.id === "html" && ("7 meses estudando e praticando")}</p>
                        <p>{tech.id === "css" && ("7 meses estudando e praticando")}</p>
                        <p>{tech.id === "js" && ("6 meses estudando e praticando")}</p>
                        <p>{tech.id === "bootstrap" && ("4 meses estudando e praticando")}</p>
                        <p>{tech.id === "node" && ("3 meses estudando e praticando")}</p>
                        <p>{tech.id === "react" && ("3 meses estudando e praticando")}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer