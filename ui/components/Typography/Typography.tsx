import { FC } from "react";

import styles from "./styles.module.scss";

/*
 * Component
 */

export const Display1: FC = (props) => {
  const { children } = props;

  return <h1 className={styles.heading1}>{children}</h1>;
};

export const Heading1: FC = (props) => {
  const { children } = props;

  return <h1 className={styles.heading1}>{children}</h1>;
};

export const Heading2: FC = (props) => {
  const { children } = props;

  return <h2 className={styles.heading2}>{children}</h2>;
};

export const Heading3: FC = (props) => {
  const { children } = props;

  return <h3 className={styles.heading3}>{children}</h3>;
};

export const Heading4: FC = (props) => {
  const { children } = props;

  return <h4>{children}</h4>;
};

export const Heading5: FC = (props) => {
  const { children } = props;

  return <h5>{children}</h5>;
};

export const Heading6: FC = (props) => {
  const { children } = props;

  return <h6>{children}</h6>;
};

export const Paragraph: FC = (props) => {
  const { children } = props;

  return <p>{children}</p>;
};

export const Emphasis: FC = (props) => {
  const { children } = props;

  return <em>{children}</em>;
};

export const Strong: FC = (props) => {
  const { children } = props;

  return <strong>{children}</strong>;
};
