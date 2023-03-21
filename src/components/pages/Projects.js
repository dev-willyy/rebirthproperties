import React from "react";
import "../../styles/Projects.scss";
import { Link } from "react-router-dom";
import ourProjects from "../projectsData";

function Projects() {
    return (
        <section className="section-wrapper-projects">
            <main className="section-container-projects">
                {ourProjects.map((project, index) => (
                    <div className="section-container-item" key={project.id}>
                        <Link to={project.linkPath}>
                            <div>
                                <img src={require(`../../assets/images/${project.imgSrc}.png`)} alt={project.altText} />
                                <h2>{project.headingText} </h2>
                                <p>{project.pText} </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
        </section>
    );
}

export default Projects;
