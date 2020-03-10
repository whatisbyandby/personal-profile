import React from "react"
import { Link } from "gatsby"
import StyledNav from "./styles/StyledNav"
import StyledBackground from "./styles/StyledBackground"
import Image from "./image"

const Header = props => {
  return (
    <StyledBackground>
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
    </StyledBackground>
  )
}

export default Header
