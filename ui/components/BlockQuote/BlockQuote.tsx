import { FC } from "react";

import styles from "./styles.module.scss";

/*
 * Types
 */

type BlockQuoteProps = {
  /* author of quote to display */
  author?: string;
};

/*
 * Component
 */

export const BlockQuote: FC<BlockQuoteProps> = (props) => {
  const { children, author } = props;

  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};
