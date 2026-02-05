import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body, button{
        background-color:  ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: ${props => props.theme.fonts.base};
        font-size: 15px;
        width: 100%;  
    }
`;

export default GlobalStyle;