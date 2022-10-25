import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
        }

        .App {
            max-width: 1200px;
            margin: 0 auto;
        }
`;
