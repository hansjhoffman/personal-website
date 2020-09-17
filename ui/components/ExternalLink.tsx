import { FC } from "react";
import styled from "styled-components";

/*
 * Types
 */

const LinkWrapper = styled.a`
  line-height: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/*
 * Types
 */

export type ExternalLinkProps = {
  /* external URL */
  href: string;
};

/*
 * Component
 */

export const ExternalLink: FC<ExternalLinkProps> = (props) => {
  const { children, href } = props;

  return (
    <LinkWrapper href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </LinkWrapper>
  );
};
