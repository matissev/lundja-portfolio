// Libraries
import React from "react"
import styled from 'styled-components'
import ProjectPreview from "./project-preview"
import Masonry from 'react-masonry-css'


// ============================================================================================================ Logic

const ProjectsGallery = ({ projects, className }) => {
  return (
    <$Masonry breakpointCols={2} columnClassName="my-masonry-grid_column">
      {projects.map((project, i) => {
        return (
          <$ProjectPreview project={project} key={`project__${project.slug}`}></$ProjectPreview>
        )
      })}
    </$Masonry>
  )
}


// ============================================================================================================ Styles

const $Masonry = styled(Masonry)`
  grid-column: 2 / span 10;
  display: flex;
  margin-left: calc(-5 * var(--l-gw)); /* gutter size offset */
  width: auto;

  .my-masonry-grid_column {
    padding-left: calc(5 * var(--l-gw)); /* gutter size */
    background-clip: padding-box;
  }
`

const $ProjectPreview = styled(ProjectPreview)`
  display: block;
  margin-bottom: calc(5 * var(--l-gw));
`

export default ProjectsGallery