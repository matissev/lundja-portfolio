// Libraries
import React from "react"
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'


// ============================================================================================================ Logic

const Bio = ({ bio, className }) => {
    return (
        <div className={className}>
            <MarkdownWrapper className="markdownWrapper">
                <ReactMarkdown source={bio} />
            </MarkdownWrapper>
        </div>
    )
}


// ============================================================================================================ Styles

const $Bio = styled(Bio)`
    font-size: var(--fs-m);
    margin-bottom: var(--l-rh3);
`

const MarkdownWrapper = styled.div`
    p {
        margin: 0;
        line-height: var(--l-rh2);
    }

    p:first-of-type {
        /* margin-top: calc(-1 * (var(--l-rh) + var(--l-rh0_5))); */
    }
`

export default $Bio