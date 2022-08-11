import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
