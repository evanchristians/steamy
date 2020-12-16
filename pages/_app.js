import { GlobalStyle, theme } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Main } from "../components/Main";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
