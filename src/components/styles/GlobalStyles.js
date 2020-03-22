import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`  
   html, body, #___gatsby {
    height: 100%;
    font-family: sans-serif;
    line-height: 1.5;
}

body {
    margin: 0px;
    background-color: ${props => props.theme.lightBlack};
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
