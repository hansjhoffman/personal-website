import { FC } from "react";
// import { pipe } from "fp-ts/lib/pipeable";
// import * as A from "fp-ts/lib/Array";

import styles from "./styles.module.scss";

/*
 * Types
 */

export type ListProps = {
  /* items to be displayed */
  items: Array<string>;
};

/*
 * Component
 */

// const mkListItems = (items: Array<string>) => {
//   return pipe(
//     items,
//     A.map((item: string) => <li key={item}>{item}</li>),
//   );
// };

export const OrderedList: FC<ListProps> = (props) => {
  const { items } = props;

  // return <ol>{mkListItems(items)}</ol>;
  return <ol className={styles.ol}>Ordered list</ol>;
};

export const UnorderedList: FC<ListProps> = (props) => {
  const { items } = props;

  // return <ul>{mkListItems(items)}</ul>;
  return <ul className={styles.ul}>Unordered List</ul>;
};
