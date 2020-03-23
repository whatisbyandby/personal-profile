import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import styled from "styled-components"

const StyledIcons = styled.div`
  display: flex;
  h3 {
    margin-right: 1em;
    font-size: 2em;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const ContactIcons = props => {
  return (
    <StyledIcons>
      <h3>
        <a href="https://www.linkedin.com/in/perkins-scott/" target="blank">
          <FaLinkedin />
        </a>
      </h3>
      <h3>
        <a href="https://github.com/whatisbyandby" target="blank">
          <FaGithubSquare />
        </a>
      </h3>
    </StyledIcons>
  )
}

export default ContactIcons
