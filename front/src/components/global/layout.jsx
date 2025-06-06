// Libraries
import React from "react"
import styled from 'styled-components'

// Context
import { I18nContextProvider } from '#context/i18n-context'
import { LocationContextProvider } from '#context/location-context'

// Components
import Grid from "#components/utils/grid"
import Head from "./head"
import Header from "./header/header"
import Transition from "#components/global/transition"

// Styles
import GlobalStyle from "#context/global-styles"
import "#static/fonts/tw-cen-mt/font-face.css"


// ============================================================================================================ Logic

const Layout = ({ children, location }) => {
  return (
        <I18nContextProvider>
          <LocationContextProvider location={location}>
            {/* <Grid /> */}
            <GlobalStyle />
            <Head />
            <Header/>
            <Transition>
              <Main>
                {children}
              </Main>
            </Transition>
          </LocationContextProvider>
        </I18nContextProvider>
  )
}


// ============================================================================================================ Styles

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(var(--l-c), minmax(0, 1fr));
  grid-column-gap: var(--l-gw);
  right: var(--l-m);
  left: var(--l-m);
`

export default Layout
