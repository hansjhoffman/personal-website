import { FC } from "react";
import styled from "styled-components";
import { Palette } from "@ui/theme";

/*
 * Types
 */

export type TypographyProps = {
  color?: Palette;
};

/*
 * Styles
 */

const H1 = styled.h1<TypographyProps>`
  font-size: 6rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => `${theme.lineHeight}em`};
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 9.6rem;
  }
`;

const H2 = styled.h2<TypographyProps>`
  font-size: 2.8rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => `${theme.lineHeight}em`};
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 3.3rem;
  }
`;

const H3 = styled.h3<TypographyProps>`
  font-size: 2rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => `${theme.lineHeight}em`};
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 2.3rem;
  }
`;

const H4 = styled.h4<TypographyProps>`
  font-size: 2rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => `${theme.lineHeight}em`};
  color: ${(props) => (props.color ? props.color : props.theme.colors.fg)};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.h5<TypographyProps>`
  font-size: 1.9rem;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => `${theme.lineHeight}em`};
  color: ${(props) => (props.color ? props.color : props.theme.colors.fg)};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 2.3rem;
  }
`;

const B1 = styled.p<TypographyProps>`
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
`;

const Overline = styled.span<TypographyProps>`
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

/*
 * Component
 */

export const Heading1: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <H1 {...rest}>{children}</H1>;
};

export const Heading2: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <H2 {...rest}>{children}</H2>;
};

export const Heading3: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <H3 {...rest}>{children}</H3>;
};

export const Heading4: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <H4 {...rest}>{children}</H4>;
};

export const Heading5: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <Subtitle {...rest}>{children}</Subtitle>;
};

export const Heading6: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <Overline {...rest}>{children}</Overline>;
};

export const Body1: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;

  return <B1 {...rest}>{children}</B1>;
};

export const Emphasis: FC<TypographyProps> = (props) => {
  const { children } = props;

  return <em>{children}</em>;
};

export const Strong: FC<TypographyProps> = (props) => {
  const { children } = props;

  return <strong>{children}</strong>;
};
