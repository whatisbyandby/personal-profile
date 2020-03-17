import styled from "styled-components"

const StyledContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
`

export default StyledContent
