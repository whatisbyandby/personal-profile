import styled from "styled-components"

const StyledNav = styled.nav`
  height: 20%;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
  li {
    padding: 2em;
  }
  a {
    font-weight: bold;
    font-size: 1.5em;
    color: ${props => props.theme.white};
  }
`
export default StyledNav
