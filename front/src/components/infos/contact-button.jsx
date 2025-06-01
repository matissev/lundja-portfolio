// Libraries
import React, { useState, useContext } from 'react'
import styled from 'styled-components'

// Context
import i18nContext from '#context/i18n-context'

// Lazy
const Email = React.lazy(() =>
  import("./email")
)


// ============================================================================================================ Logic

function ContactButton({ className }) {
  const isSSR = typeof window === "undefined"
  const i18n = useContext(i18nContext)
  const [showingEmail, setShowingEmail] = useState(false);

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<button className={className}>{i18n.format({ id: "loading" })}</button>}>
          {showingEmail
            ? <Email className={className}/>
            : <button className={className} onClick={() => setShowingEmail(true)}>{i18n.format({ id: "infos.contactButtonLabel" })}</button>
          }
        </React.Suspense>
      )}
    </>
  )
}

// ============================================================================================================ Styles

const $ContactButton = styled(ContactButton)`
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
    line-height: var(--l-rh2);
    overflow: visible;
    color: var(--c-txt1);
    font-size: var(--fs-l);
    cursor: pointer;
`

export default $ContactButton