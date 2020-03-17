import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
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
