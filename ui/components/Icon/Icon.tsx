import { FC } from "react";

import styles from "./styles.module.scss";

/*
 * Types
 */

type IconProps = {
  /* author of quote to display */
  size?: "sm" | "md" | "lg" | "xl";
};

/*
 * Component
 */

export const Icon: FC<IconProps> = (props) => {
  const { children, size = "sm" } = props;

  return null;
};
