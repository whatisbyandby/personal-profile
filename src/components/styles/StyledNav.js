import styled from "styled-components"

const StyledNav = styled.nav`
  width: 100%;
  padding: 0 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.blackTrans};
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
  li {
    margin: 1em;
  }
  a {
    font-weight: bold;
    font-size: 1em;
    color: ${props => props.theme.white};
  }
`
export default StyledNav
