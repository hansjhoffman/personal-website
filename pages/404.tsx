import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Heading1, Heading3 } from "@ui/components/Typography";
import { Palette } from "@ui/theme";

/*
 * Styles
 */

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: inherit;
`;

/*
 * Component
 */

const Custom404: FC = () => {
  return (
    <>
      <Head>
        <title>404 - Hans Hoffman</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <Section>
          <Heading1 color={Palette.orange}>404</Heading1>
          <Heading3>Page Not Found</Heading3>
        </Section>
      </main>
    </>
  );
};

export default Custom404;
