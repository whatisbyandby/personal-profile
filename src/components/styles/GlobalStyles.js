import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`  
   html, body, #___gatsby {
    height: 100%;
    font-family: sans-serif;
}

body {
    margin: 0px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
}

div[role="group"][tabindex] {
    height: 100%;
}

   #gatsby-focus-wrapper {
       height: 100%;
   }

   a {
       text-decoration: none;
   }
`

export default GlobalStyles
