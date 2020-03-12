import React from "react"
import { Link } from "gatsby"
import StyledNav from "./styles/StyledNav"
import StyledBackground from "./styles/StyledBackground"
import Image from "./image"
import StyledLayer from "./styles/StyledBackgroundLayer"

const Header = props => {
  return (
    <StyledBackground>
      <StyledLayer>
        <StyledNav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </StyledNav>
      </StyledLayer>
    </StyledBackground>
  )
}

export default Header
