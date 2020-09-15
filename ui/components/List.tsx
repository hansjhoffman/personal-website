import { FC } from "react";
import styled from "styled-components";

/*
 * Types
 */

export type ListProps = {
  /* items to be displayed */
  items: Array<string>;
};

/*
 * Styles
 */

const Ul = styled.ul``;

/*
 * Component
 */

export const List: FC<ListProps> = (props) => {
  const { items } = props;

  return (
    <Ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Ul>
  );
};
