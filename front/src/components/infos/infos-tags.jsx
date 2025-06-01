// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

function InfosTags({ className, tags }) {
    return (
        <div className={className}>
            {tags.map((tag) =>
                <span key={tag.id}>{tag.tag}</span>
            )}
        </div>
    )
}


// ============================================================================================================ Styles

const $InfosTags = styled(InfosTags)`
    span {
        font-weight: bold;
        font-size: var(--fs-m);
        &:before {
            content: " — ";
        }
    }
`

export default $InfosTags
