import { FC } from "react";

import styles from "./styles.module.scss";
import styled from "styled-components";

/*
 * Styles
 */

const H1 = styled.h1`
  font-size: 4rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeight}; // how to mult by 1em??
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 4.6rem;
  }
`;

const H2 = styled.h1`
  font-size: 2.8rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeight}; // how to mult by 1em??
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 3.3rem;
  }
`;

const H3 = styled.h1`
  font-size: 2rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeight}; // how to mult by 1em??
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 323rem;
  }
`;

const H4 = styled.h1`
  font-size: 2rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeight}; // how to mult by 1em??
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: 0;

  @media only screen and (min-width: 769px) {
    font-size: 2.3rem;
  }
`;

const Body = styled.p`
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
`;

const Overline = styled.span`
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

// should I export everything as <Font> and access like <Font.H1>?

/*
 * Component
 */

export const Display1: FC = (props) => {
  const { children } = props;

  return <H1>{children}</H1>;
};

export const Heading1: FC = (props) => {
  const { children } = props;

  return <H1>{children}</H1>;
};

export const Heading2: FC = (props) => {
  const { children } = props;

  return <H2>{children}</H2>;
};

export const Heading3: FC = (props) => {
  const { children } = props;

  return <H3>{children}</H3>;
};

export const Heading4: FC = (props) => {
  const { children } = props;

  return <H4>{children}</H4>;
};

export const Heading5: FC = (props) => {
  const { children } = props;

  return <Overline>{children}</Overline>;
};

export const Paragraph: FC = (props) => {
  const { children } = props;

  return <Body>{children}</Body>;
};

export const Emphasis: FC = (props) => {
  const { children } = props;

  return <em>{children}</em>;
};

export const Strong: FC = (props) => {
  const { children } = props;

  return <strong>{children}</strong>;
};
