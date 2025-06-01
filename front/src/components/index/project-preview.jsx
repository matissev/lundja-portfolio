// Libraries
import React from "react"
import { Link } from "gatsby-plugin-react-intl";
import styled from "styled-components"
import Img from "gatsby-image"


// ============================================================================================================ Logic

const ProjectPreview = ({ project, className }) => {
  return (
    <Link className={className} to={`/` + project.slug} layout={project.layout}>
      <Preview>
        <h2>{project.title}</h2>
        <Img className='Img' fluid={project.preview.visual.imageFile.childImageSharp.fluid}/>
      </Preview>
    </Link>
  )
}


// ============================================================================================================ Styles

const $ProjectPreview = styled(ProjectPreview)`
  /* width: 200px;
  display: inline-block; */

  &:last-of-type {
    margin-bottom: var(--l-brh);
  }

  @media (max-width: 750px) {
    margin-top: var(--l-rh2);
  }

  @media (max-width: 750px) {
    grid-column: 1 / span 12;
  }
`

const Preview = styled.article`
  line-height: var(--l-rh2);
  width: 100%;

  &:hover .Img {
		filter: brightness(0.8);
	}

  .Img {
    filter: brightness(1);
	  transition: filter 0.3s ease-in-out;
    width: 100%;
  }

  h2 {
    margin: var(--l-rh0_25) 0 calc(var(--l-rh0_25) + var(--l-rh0_5)) 0;
    font-weight: normal;
		font-size: var(--fs-l);
  }
`

const Category = styled.p`
  display: inline-block;
  font-size: var(--fs-m);
  margin: 0;
  margin-bottom: calc(var(--l-rh0_25) + var(--l-rh0_125) / 2);

  &:before, &:after {
    font-size: var(--fs-l);
    content: "[";
  }

  &:after {
    content: "]";
  }
`

export default $ProjectPreview