import { FC } from "react";
import styled from "styled-components";
import { Heading6 } from "@ui/components/Typography";
import { isNotUndefined } from "@utils/typeGuards";

/**
 * Types
 */

export type ListProps = {
  /* items to be displayed */
  items: Array<string>;
  /* text to display above the list */
  title?: string;
};

/**
 * Styles
 */

const Ul = styled.ul`
  margin-left: 16px;
  list-style: none;

  li::before {
    content: "▴";
    display: inline-block;
    margin-right: 8px;
  }
`;

const Wrapper = styled.div``;

/**
 * Component
 */

export const List: FC<ListProps> = (props) => {
  const { items, title } = props;

  return (
    <Wrapper>
      {isNotUndefined(title) && <Heading6>{title}</Heading6>}
      <Ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Ul>
    </Wrapper>
  );
};
