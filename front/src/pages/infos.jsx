// Libraries
import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// Hooks
import useFilterLocale from "#hooks/useFilterLocale"

// Components
import Bio from "#components/infos/bio"
import Social from "#components/infos/social"
import ContactButton from "#components/infos/contact-button"
import SEO from "#components/global/seo"
import InfosTags from "#components/infos/infos-tags"
import Lead from "#components/infos/lead"



// ============================================================================================================ Logic

const InfosPage = ({ data }) => {
  const infos = useFilterLocale(data.strapi.info)

  return (
    <>
      <SEO title="Infos"/>
      <$Lead lead={infos.lead}/>
      <$Bio bio={infos.bio}/>
      <$InfosTags tags={infos.tags}/>
      <$Social social={infos.social}>
        <$ContactButton />
      </$Social>
    </>
  )
}


// ============================================================================================================ Styles

const $Lead = styled(Lead)`
  grid-column: 2 / span 10;
`

const $Bio = styled(Bio)`
  grid-column: 2 / span 10;

  @media (max-width: 1300px) {
    .shape {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    grid-column: 1 / span 12;
  }

  @media (max-width: 1100px) {
    .markdownWrapper p {
      line-height: var(--l-rh3);
    }
  }

  @media (max-width: 900px) {
    font-size: var(--fs-m);

    .markdownWrapper p {
      line-height: var(--l-rh2);
    }
  }

  @media (max-width: 850px) {
    margin-top: calc(-1 * var(--l-rh));
  }

  @media (max-width: 450px) {
    margin-top: 0;
  }
`

const $ContactButton = styled(ContactButton)`
  margin-top: calc(-1 * var(--l-rh0_25));

  @media (max-width: 1500px) {
    grid-column: 2 / span 3;
  }

  @media (max-width: 1300px) {
    grid-column: 1 / span 4;
  }

  @media (max-width: 900px) {
    grid-column: 5 / span 4;
    font-size: var(--fs-m);
  }

  @media (max-width: 650px) {
    grid-column: 4 / span 6;
  }

  @media (max-width: 450px) {
    grid-column: 3 / span 8;
    grid-row: 1;
    margin-top: calc(-1 * var(--l-rh));
    margin-bottom: var(--l-rh3);
  }

  @media (max-width: 450px) {
    grid-column: 2 / span 10;
  }
`

const $InfosTags = styled(InfosTags)`
  grid-column: 2 / span 4;
  line-height: var(--l-rh2);
`

const $Social = styled(Social)`
  grid-column: 7 / span 5;
  float: left;

  @media (max-width: 1500px) {
    p {
      grid-column: span 3;
    }
  }

  @media (max-width: 1300px) {
    grid-column: 1 / span 12;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  @media (max-width: 1000px) {
    p {
      grid-column: span 4;
    }
  }

  @media (max-width: 900px) {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: var(--fs-m);
    p {
      margin: calc(var(--l-gw)*2);
    }
  }

  @media (max-width: 450px) {
    display: grid;
    margin-top: 0;
    text-align: left;

    p {
      grid-column: 2 / span 10;
      margin: calc(var(--l-gw)*2) 0;
      width: 100%;
    }
  }
`


// ============================================================================================================ Data

export const query = graphql`
  query Infos {
    strapi {
      info {
        bio_fr
        bio_en
        lead_fr
        lead_en
        tags {
          id
          tag_fr
          tag_en
        }
        social {
          media_name
          url_fr
          url_en
        }
      }
    }
  }
`

export default InfosPage
