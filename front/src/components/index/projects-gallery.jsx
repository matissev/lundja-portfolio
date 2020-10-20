import React from "react"
import ProjectPreview from "./project-preview"

const ProjectsGallery = ({ projects }) => {
  return (
    <>
      {projects.map((project, i) => {
        return (
          <ProjectPreview project={project} key={`project__${project.slug}`}></ProjectPreview>
        )
      })}
    </>
  )
}

export default ProjectsGallery