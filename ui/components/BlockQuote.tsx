import { FC } from "react";
import styled from "styled-components";

/*
 * Types
 */

type BlockQuoteProps = {
  /* author of quote to display */
  author?: string;
};

/*
 * Styles
 */

const El = styled.blockquote``;

/*
 * Component
 */

export const BlockQuote: FC<BlockQuoteProps> = (props) => {
  const { children, author } = props;

  return <El>{children}</El>;
};
