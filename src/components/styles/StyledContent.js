import styled from "styled-components"

const StyledContent = styled.section`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  p {
    text-align: justify;
    width: 80%;
  }
`

export default StyledContent
