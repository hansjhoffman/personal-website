import { DefaultTheme } from "styled-components";

export enum Palette {
  orange = "#ffc16c",
  purple = "#191b2a",
  white = "#ffffff",
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: Palette;
      fg: Palette;
      primary: Palette;
    };
    lineHeight: number;
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    bg: Palette.purple,
    fg: Palette.white,
    primary: Palette.orange,
  },
  lineHeight: 1.5,
};
