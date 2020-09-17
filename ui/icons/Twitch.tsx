import { FC } from "react";
import { IconProps } from "@ui/components/Icon";

/*
 * Component
 */

export const Twitch: FC<IconProps> = (props) => {
  const { color, size } = props;

  return (
    <svg
      enableBackground="new 0 0 512 512"
      height={`${size}`}
      viewBox="0 0 512 512"
      width={`${size}`}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48,0L16,96v352h128v64h64l64-64h96l128-136.32V0H48z M464,288l-89.6,96H260.928L192,434.144V384H80V32h384V288z"
        fill={color ? color : "currentColor"}
      />
      <rect x="240" y="128" width="32" height="128" fill={color ? color : "currentColor"} />
      <rect x="336" y="128" width="32" height="128" fill={color ? color : "currentColor"} />
    </svg>
  );
};
