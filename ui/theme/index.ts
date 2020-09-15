import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      fg: string;
      primary: string;
    };
    lineHeight: number;
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    bg: "#191b2a",
    fg: "#ffffff",
    primary: "#ffc16c",
  },
  lineHeight: 1.618,
};
