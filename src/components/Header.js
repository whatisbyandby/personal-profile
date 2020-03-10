import React from "react"
import { Link } from "gatsby"
import StyledNav from "./styles/StyledNav"
import Image from "./image"

const Header = props => {
  return (
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
  )
}

export default Header
