import { createGlobalStyle } from "styled-components";

// @import url("https://fonts.googleapis.com/css?family=Playfair+Display:600|PT+Sans&display=swap");
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: "PT Sans", sans-serif;
    font-weight: 400;
    line-height: ${({ theme }) => theme.lineHeight};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.fg};

    /* Disable auto-enlargement of small text in Safari */
    text-size-adjust: 100%;

    /* Enable kerning and optional ligatures */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    @media only screen and (min-width: 769px) {
      font-size: 1.4rem;
    }
  }

  main {
    min-height: 100vh;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  button,
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`;
