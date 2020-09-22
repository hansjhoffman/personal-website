import { DefaultTheme } from "styled-components";

export enum Palette {
  black = "#1b181a",
  orange = "#ffc16c",
  pink = "#d34da8",
  purple = "#191b2a",
  smoke = "#303436",
  white = "#ffffff",
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: Palette;
      fg: Palette;
      primary: Palette;
      accent: Palette;
      shadow: Palette;
      black: Palette;
    };
    lineHeight: number;
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    bg: Palette.purple,
    fg: Palette.white,
    primary: Palette.orange,
    accent: Palette.pink,
    shadow: Palette.smoke,
    black: Palette.black,
  },
  lineHeight: 1.5,
};
