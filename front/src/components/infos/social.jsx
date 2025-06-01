// Libraries
import React from 'react'
import styled from 'styled-components'


// ============================================================================================================ Logic

function Social({ className, social, children }) {
    return (
        <div className={className}>
            {children}
            {
                social.map((link) => {
                    return (
                        <p key={link.media_name}>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                {link.media_name}
                            </a>
                        </p>
                    )
                })
            }
        </div>
    )
}


// ============================================================================================================ Styles

const $Social = styled(Social)`
    margin: 0;
    font-size: var(--fs-l);
    line-height: var(--l-rh);
`

export default $Social
