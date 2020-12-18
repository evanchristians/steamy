import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, :before, :after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic';
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
    black_a: "#151515",
    black_b: "#1B1B1B",
    grey: "#6B7585",
    white: "#FBFBFB",
    pink: "#FB2B76",
  },
};
