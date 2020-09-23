import { FC } from "react";
import styled from "styled-components";
import { isNotUndefined } from "@utils/typeGuards";

/**
 * Types
 */

type BlockQuoteProps = {
  /* author of quote to display */
  author?: string;
};

/**
 * Styles
 */

const El = styled.blockquote`
  font-size: 1.8rem;
  font-style: italic;
  border-left: ${({ theme }) => `2px solid ${theme.colors.accent}`};
  padding: 16px 20px;
  max-width: 90vw;
  margin: 0 auto;

  p {
    margin-bottom: 0.5em;
  }
`;

/**
 * Component
 */

export const BlockQuote: FC<BlockQuoteProps> = (props) => {
  const { children, author } = props;

  return (
    <El>
      <p>{children}</p>
      {isNotUndefined(author) && <span>{author}</span>}
    </El>
  );
};
