import React from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import theme from "./styles/theme"
import GlobalStyles from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
