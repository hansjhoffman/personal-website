import { FC } from "react";

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
