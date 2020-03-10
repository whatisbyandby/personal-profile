import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`  
   html, body, #___gatsby {
    height: 100%;
}

body {
    margin: 0px;
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
