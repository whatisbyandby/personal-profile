import React from "react"

import StyledBackground from "./styles/StyledBackground"
import Image from "./image"
import StyledLayer from "./styles/StyledBackgroundLayer"
import Nav from "./Nav"

const Header = props => {
  return (
    <>
      <StyledBackground>
        <StyledLayer />
      </StyledBackground>
      <Nav />
    </>
  )
}

export default Header
