import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, :before, :after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:
      ---apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
    black_a: "#151515",
    black_b: "#1B1B1B",
    grey: "#6B7585",
    white: "#FBFBFB",
  },
};
