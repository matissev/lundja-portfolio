// Libraries
import React from "react"
import styled from 'styled-components'


// ============================================================================================================ Logic

const Lead = ({ lead, className }) => {
    return (
        <h1 className={className}>
            {lead}
        </h1>
    )
}


// ============================================================================================================ Styles

const $Lead = styled(Lead)`
    margin-top: var(--l-brh);
    line-height: var(--l-rh0_5);
    margin-bottom: var(--l-rh4);
    font-weight: bold;
    font-style: italic;
    font-size: var(--fs-l);
`

export default $Lead