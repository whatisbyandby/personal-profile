import React from "react"
import styled from "styled-components"

import Nav from "./Nav"

const StyledHeader = styled.header`
  padding-top: 15%;
`

const Header = props => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  )
}

export default Header
