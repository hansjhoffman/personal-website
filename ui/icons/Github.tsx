import { FC } from "react";
import { IconProps } from "@ui/components/Icon";

/*
 * Component
 */

export const Github: FC<IconProps> = (props) => {
  const { color, size } = props;

  return (
    <svg
      enableBackground="new 0 0 512 512"
      height={`${size}`}
      viewBox="0 0 512 512"
      width={`${size}`}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m427.5 200.7c1.776-11.238 2.884-23.56 3.163-37.377-0.107-59.246-28.468-80.21-33.925-90.038 8.037-44.89-1.331-65.309-5.688-72.299-16.07-5.704-55.91 14.722-77.678 29.101-35.491-10.389-110.49-9.375-138.62 2.689-51.896-37.16-79.344-31.494-79.344-31.494s-17.745 31.82-4.691 78.371c-17.075 21.759-29.802 37.143-29.802 77.949 0 9.773 0.607 19.008 1.637 27.893 14.705 77.318 75.97 110.67 136.15 116.43-9.056 6.881-19.928 19.903-21.432 34.992-11.379 7.357-34.268 9.789-52.067 4.193-24.939-7.88-34.486-57.266-71.833-50.221-8.081 1.512-6.475 6.842 0.523 11.386 11.378 7.38 22.094 16.554 30.354 36.185 6.344 15.072 19.687 41.982 61.873 41.982 16.747 0 28.477-1.979 28.477-1.979s0.319 38.406 0.319 53.385c0 17.238-23.264 22.078-23.264 30.348 0 3.289 7.7 3.601 13.888 3.601 12.229 0 37.673-10.186 37.673-28.103 0-14.237 0.227-62.081 0.227-70.46 0-18.307 9.811-24.136 9.811-24.136s1.201 97.727-2.361 110.83c-4.177 15.408-11.744 13.219-11.744 20.076 0 10.233 30.589 2.502 40.735-19.897 7.849-17.495 4.334-113.33 4.334-113.33l8.183-0.178s0.094 43.892-0.188 63.944c-0.295 20.769-2.438 47.025 9.898 59.417 8.097 8.15 32.903 22.451 32.903 9.382 0-7.574-17.371-13.833-17.371-34.353v-94.528c10.553 0 12.734 31.072 12.734 31.072l3.804 57.727s-2.526 21.065 22.756 29.856c8.925 3.126 28.018 3.976 28.913-1.271 0.897-5.26-22.99-13.038-23.217-29.342-0.123-9.93 0.445-15.742 0.445-58.934 0-43.168-5.799-59.137-26.007-71.863 58.601-6.014 119.47-32.185 130.43-101z"
        fill={color ? color : "currentColor"}
      />
    </svg>
  );
};