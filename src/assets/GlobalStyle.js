import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
        }

        .App {
            margin: 0 auto;
        }
`;
