import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body, button{
        background-color:  rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        width: 100%;  
    }

    a{
        text-decoration: none;
    }
`

export default GlobalStyle;