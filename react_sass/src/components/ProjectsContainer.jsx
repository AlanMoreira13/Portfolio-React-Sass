import { NavLink } from "react-router-dom"

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
        <h2>Projetos</h2>
        <p>
            Alguns dos meus projetos que fui desenvolvendo ao longo de cursos e bootcamps que participo.
        </p>
                
        <NavLink className="btn" to="portfolio-deploy/projects" >
            Projetos
        </NavLink>
    </section>
  )
}

export default ProjectsContainer