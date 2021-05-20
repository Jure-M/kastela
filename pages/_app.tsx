import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

import { AppProvider } from "../context/AppContext";

interface MyAppProps extends AppProps {}

function MyApp<MyAppProps>({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
