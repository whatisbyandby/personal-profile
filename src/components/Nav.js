import React from "react"
import { Link } from "gatsby"
import StyledNav from "./styles/StyledNav"

const Nav = props => {
  return (
    <StyledNav>
      <h3>
        <Link to="/">Scott Perkins</Link>
      </h3>
      <ul>
        <li id="about-nav">
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
