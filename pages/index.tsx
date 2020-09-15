import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";

/*
 * Styles
 */

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HeroPreTitle = styled.div`
  position: relative;
  display: flex;
  font-family: "PT Sans", sans-serif;
  font-size: 4rem;
  line-height: 1em;
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroTitle = styled.h1`
  font-family: "Playfair Display", sans-serif;
  font-size: 10rem;
  line-height: 1em;
`;

const HeroDesc = styled.div`
  position: relative;
  font-size: 2rem;
  line-height: 1em;
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
          <HeroPreTitle>Hello, I'm</HeroPreTitle>
          <HeroTitle>
            Hans
            <br />
            Hoffman
          </HeroTitle>
          <HeroDesc>Fullstack web & mobile developer</HeroDesc>
        </HeroSection>
      </main>
    </>
  );
};

export default Home;
