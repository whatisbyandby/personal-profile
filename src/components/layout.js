import React from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import theme from "./styles/theme"
import GlobalStyles from "./styles/GlobalStyles"
import Header from "./Header"
import StyledLayout from "./styles/StyledLayout"

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        {children}
      </ThemeProvider>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
