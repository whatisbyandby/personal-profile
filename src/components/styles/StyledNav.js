import styled from "styled-components"

const StyledNav = styled.nav`
  height: 30%;
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
    color: ${props => props.theme.linkColor};
  }
`
export default StyledNav
