// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

const Nav = ({ className, children }) => {
    return (
        <nav className={className}>
          {children}
        </nav>
    )
}


// ============================================================================================================ Styles

const $Nav = styled(Nav)`
  padding: 0 var(--l-rh0_5);
  font-size: var(--fs-s);

  a {
    display: block;
  }
`

export default $Nav