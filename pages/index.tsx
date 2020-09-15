import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Body1, Heading1, Heading5 } from "@ui/components/Typography";
import { Palette } from "@ui/theme";

/*
 * Styles
 */

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;

  @media only screen and (min-width: 769px) {
    align-items: center;
  }
`;

/*
 * Component
 */

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Hans Hoffman</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <HeroSection>
          <Heading5 color={Palette.orange}>Fullstack web & mobile developer</Heading5>
          <Heading1>Hans Hoffman</Heading1>
          <Body1>
            I&apos;m a Software Engineer, budding entrepreneur, dog lover, avid reader and a 81kg
            Olympic Weightlifter.
          </Body1>
        </HeroSection>
      </main>
    </>
  );
};

export default Home;

// You&apos;re either a simplifier or a multiplier. Which one are you?
