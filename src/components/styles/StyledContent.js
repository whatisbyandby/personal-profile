import styled from "styled-components"

const StyledContent = styled.section`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  padding: 2em;
  p {
    text-align: justify;
  }
`

export default StyledContent
