import React, { FC, StrictMode } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@ui/theme";
import { GlobalStyle } from "@ui/theme/globals";

import "styles/app.css";

/*
 * Types
 */

/*
 * Component
 */

const App: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
