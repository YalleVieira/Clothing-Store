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
            max-width: 1500px;
            margin: 0 auto;
        }

        h3 {
            font-family: "Roboto", sans-serif;
            font-size: 35px;
            text-align: center;
            font-weight: bolder;
        }

        button {
            cursor: pointer;
            border-radius: 20px;
            padding: 1em 2em;
            border: none;
            z-index: 2;
            font-weight: bold;
        }

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size: 14px;
        }
        .grid-area {
            padding: 40px 40px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            gap: 30px;
  }
`;
