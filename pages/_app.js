import GoogleFonts from "next-google-fonts";
import { ThemeProvider } from "styled-components";
import { Main } from "../components/Main";
import { GlobalStyle, theme } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
