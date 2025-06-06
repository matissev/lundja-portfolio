// Library
import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"

// Components
import SEO from "#components/global/seo"
import Heading from "#components/project/heading"
import BackButton from "#components/project/back-button"
import Brief from "#components/project/brief"
import MainMedia from "#components/project/main-media"
import Content from "#components/project/content"
import Footer from "#components/project/footer"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"


// ============================================================================================================ Logic

const ProjectPage = ({ data, pageContext }) => {
  const project = useFilterLocale(data.strapi.projects[0])
  const infos = useFilterLocale(data.strapi.info)

  return (
    <>
      <SEO
        title={project.title}
        description={project.brief}
        isProject={true}
        image={{
          url: project.preview.social_image.imageFile.publicURL,
          alt: project.preview.alt
        }}
      />
      <BackButton route="/"/>
      <$Heading title={project.title}/>
      <$Brief text={project.brief}/>
      <$MainMedia main_media={project.main_media[0]}/>
      <Content components={project.content} />
      <$Footer description={project.description} tags={project.tags}/>
    </>
  )
}


// ============================================================================================================ Styles

const $ContactButton = styled(ContactButton)`
  grid-column: 6 / span 2;
  margin-top: calc(var(--l-rh3));

  @media(max-width: 1300px) {
    grid-column: 5 / span 4;
  }

  @media(max-width: 800px) {
    grid-column: 4 / span 6;
  }

  @media(max-width: 550px) {
    grid-column: 3 / span 8;
  }
`

const $Social = styled(Social)`
  grid-column: 1 / span 12;
  display: flex;
  justify-content: space-evenly;
  margin: calc(var(--l-rh4)) 0 calc(var(--l-rh5)) 0;
  flex-wrap: wrap;
  
  p {
    text-align: center;
    margin: 0 calc(2 * var(--l-gw));
    margin-bottom: var(--l-rh2);
  }
`

const $Heading = styled(Heading)`
  grid-column: 1 / span 12;
  margin-bottom: var(--l-rh2);
  margin-top: var(--l-brh2);

  @media(max-width: 1000px) {
    margin-top: var(--l-rh3);
  }

  @media(max-width: 600px) {
    margin-top: var(--l-rh4);
  }
`

const $MainMedia = styled(MainMedia)`
  margin-top: calc(var(--l-brh) + var(--l-rh) + var(--l-rh0_25) + var(--l-rh0_125));

  @media(max-width: 600px) {
    margin-top: calc(var(--l-rh4) + var(--l-rh0_25) + var(--l-rh0_125));
  }
`

const $Brief = styled(Brief)`
  margin-top: calc(var(--l-rh5) + var(--l-rh0_125) - var(--l-rh0_25));
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column: 2 / span 4;

  &:before {
    grid-column: 1 / span 3;
  }

  p {
    grid-column: 1 / span 4;
    margin-top: calc(var(--l-rh2) + var(--l-rh0_5));
  }

  @media(max-width: 1300px) {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    
    &:before {
      grid-column: 1 / span 4;
    }

    p {
      grid-column: 1 / span 6;
    }
  }

  @media(max-width: 1000px) {
    grid-column: 2 / span 8;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    
    &:before {
      grid-column: 1 / span 6;
    }

    p {
      grid-column: 1 / span 8;
    }
  }

  @media(max-width: 750px) {
    grid-column: 2 / span 10;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    
    &:before {
      grid-column: 1 / span 8;
    }

    p {
      grid-column: 1 / span 10;
    }
  }

  @media(max-width: 600px) {
    grid-column: 1 / span 12;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-row-start: 3;
    
    &:before {
      display: none;
    }

    p {
      grid-column: 1 / span 12;
    }
  }
`

const $Footer = styled(Footer)`
  @media(max-width: 1300px) {
    .markdown {
      grid-column: 3 / span 8;
    }
    
    dl {
      display: block;
      grid-column: 3 / span 8;

      dt, dd {
        text-align: left;
        float: left;
      }

      dt {
        margin-bottom: var(--l-rh);
        clear: left;
      }

      dd {
        margin-left: var(--l-gw);
      }
    }
  }

  @media(max-width: 1000px) {
    .markdown {
      grid-column: 2 / span 10;
    }

    dl {
      margin-top: calc(var(--l-rh4));
      font-size: var(--fs-l);
      grid-column: 2 / span 10;
    }
  }

  @media(max-width: 850px) {
    .markdown {
      margin-top: calc(var(--l-rh4) + var(--l-rh0_5) + var(--l-rh0_125));
      grid-column: 1 / span 12;
    }

    dl {
      grid-column: 2 / span 10;
    }
  }
`


// ============================================================================================================ Data

export const query = graphql`
  query Project($slug: String) {
    strapi {
      projects(where: { slug: $slug }) {
        id
        title_en
        title_fr
        color_scheme {
          background
          primary_text
          secondary_text
          section_background
          section_primary_text
          section_secondary_text
        }
        preview {
          alt_en,
          alt_fr
          social_image {
            url
            imageFile {
              publicURL
            }
          }
        }
        main_media {
          ... on Strapi_ComponentProjectsVideo {
            caption_en
            caption_fr
            url
          }
          ... on Strapi_ComponentProjectsImage {
            alt_en
            alt_fr
            caption_en
            caption_fr
            file {
              url
              imageFile {
                childImageSharp {
                  fluid(quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          ... on Strapi_ComponentProjectsAnimation {
            caption_en
            caption_fr
            file {
              url
            }
          }
        }
        brief_fr
        brief_en
        content {
          ... on Strapi_ComponentProjectsAnimationContent {
            animation {
              id
              caption_en
              caption_fr
              file {
                url
              }
            }
            animation_size: size
          }
          ... on Strapi_ComponentProjectsImageContent {
            image {
              id
              alt_en
              alt_fr
              caption_en
              caption_fr
              file {
                url
                imageFile {
                  childImageSharp {
                    fluid(quality: 70) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
            image_size: size
          }
          ... on Strapi_ComponentProjectsVideoContent {
            video {
              id
              caption_en
              caption_fr
              url
            }
            video_size: size
          }
          ... on Strapi_ComponentProjectsTextContent {
            id
            content_en
            content_fr
          }
        }
        description_en
        description_fr
        tags {
          backer_en
          backer_fr
          date_en
          date_fr
          location_en
          location_fr
          other {
            entry_en
            entry_fr
            label_en
            label_fr
          }
          press {
            media_name
            url
          }
          type_en
          type_fr
        }
      }
      info {
        social {
          intro_fr
          intro_en
          media_name
          outro_fr
          outro_en
          url_fr
          url_en
        }
      }
    }
  }
`

export default ProjectPage