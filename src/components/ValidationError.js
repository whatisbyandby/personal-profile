import React from "react"
import styled from "styled-components"
const StyledMessage = styled.div`
  background-color: ${props => props.theme.error};
  display: flex;
  justify-content: center;
  border-radius: 2px;
`

const ValidationError = props => {
  const { message } = props
  return (
    <StyledMessage>
      <span>{message}</span>
    </StyledMessage>
  )
}

export default ValidationError
