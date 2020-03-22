import styled from "styled-components"

const StyledContent = styled.section`
  background-color: ${props => props.theme.blackTrans};
  color: ${props => props.theme.black};
  padding: 2em;
  margin: auto;
  height: 100%;
  .content-container {
    margin: auto;
    background-color: ${props => props.theme.white};
    padding: 2em;
    border-radius: 2px;
    a {
      color: black;
      font-weight: bold;
    }
  }
  p {
    text-align: justify;
  }

  @media (max-width: 500px) {
    padding: 0;
    margin: 0;
    .content-container {
      padding: 1em;
      margin: 0;
    }
  }
`

export default StyledContent
