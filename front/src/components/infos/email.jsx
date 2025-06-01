// Libraries
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"


// ============================================================================================================ Logic

function Email({ className }) {
  const email = useEmail();
  return (
    <a href={"mailto:" + email} className={className}>{email}</a>
  )
}


// ============================================================================================================ Data

const useEmail = () => {
  const metadatas = useStaticQuery(
    graphql`
      query {
        strapi {
          website {
            contact_email
          }
        }
      }
    `
  )
  return metadatas.strapi.website.contact_email
}

export default Email
