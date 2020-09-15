import { FC, StrictMode } from "react";
import { AppProps } from "next/app";

import "styles/globals.scss";

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
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default App;
