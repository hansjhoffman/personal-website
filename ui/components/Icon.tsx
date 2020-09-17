import { ComponentType, FC } from "react";
import { DevTo } from "@ui/icons/DevTo";
import { Github } from "@ui/icons/Github";
import { LinkedIn } from "@ui/icons/LinkedIn";
import { Twitch } from "@ui/icons/Twitch";
import { Twitter } from "@ui/icons/Twitter";
import { YouTube } from "@ui/icons/YouTube";
import { Palette } from "@ui/theme";

/*
 * Types
 */

type IconNames = "devto" | "github" | "linkedin" | "twitch" | "twitter" | "youtube";

export type IconProps = {
  /* color from our palette */
  color?: Palette;
  /* width & height of icon (use 8px increments) */
  size: number;
};

type BoundaryIconProps = IconProps & { name: IconNames };

/*
 * Component
 */

const iconLookup: Record<IconNames, ComponentType<IconProps>> = {
  devto: DevTo,
  github: Github,
  linkedin: LinkedIn,
  twitch: Twitch,
  twitter: Twitter,
  youtube: YouTube,
};

export const Icon: FC<BoundaryIconProps> = (props) => {
  const { name, ...rest } = props;

  const Component = iconLookup[name];

  return <Component {...rest} />;
};
