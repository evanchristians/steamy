import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, :before, :after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
    background: "#151515",
    white: "#fefefe"
  },
};