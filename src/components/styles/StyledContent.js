import styled from "styled-components"

const StyledContent = styled.section`
  background-color: ${props => props.theme.whiteTrans};
  color: ${props => props.theme.black};
  padding: 2em;
  margin: auto;
  height: 100%;
  .content-container {
    width: 80%;
    margin: auto;
    background-color: ${props => props.theme.white};
    padding: 2em;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    a {
      color: black;
      font-weight: bold;
    }
  }
  p {
    text-align: justify;
  }
`

export default StyledContent
