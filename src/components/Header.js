import React from "react"
import { Link } from "gatsby"
import StyledNav from "./styles/StyledNav"
import StyledBackground from "./styles/StyledBackground"
import Image from "./image"

const Header = props => {
  return (
    <StyledBackground>
      <div className="background-layer">
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
      </div>
    </StyledBackground>
  )
}

export default Header
