import { GlobalStyle, theme } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Main } from "../components/Main";
import Head from "next/head";
import GoogleFonts from "next-google-fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
