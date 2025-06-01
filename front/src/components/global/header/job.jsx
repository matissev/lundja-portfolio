// Libraries
import React from "react"
import styled from 'styled-components'


// ============================================================================================================ Styles

const $Job = styled.p`
  font-size: var(--fs-xs);
  margin: 0;
  padding: 0 var(--l-rh0_5);
  transition: color 0.2s ease;
`


// ============================================================================================================ Logic

const Job = ({ className, children }) => {
  return (
    <$Job className={className}>
      {children}
    </$Job>
  )
}

export default Job
