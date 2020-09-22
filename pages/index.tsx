import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { ExternalLink } from "@ui/components/ExternalLink";
import { Icon } from "@ui/components/Icon";
import { Heading1, Heading3, Heading5 } from "@ui/components/Typography";
import { Palette } from "@ui/theme";
import { List } from "@ui/components/List";
import { BlockQuote } from "@ui/components/BlockQuote";

/**
 * Styles
 */

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: inherit;
  max-width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const MeCircle = styled.div`
  width: 224px;
  height: 224px;
  border-radius: 50%;
  overflow: hidden;
  border-width: 8px;
  border-style: solid;
  border-color: ${({ theme }) => `${theme.colors.shadow}`};
  margin: 0 0 32px 0;

  @media only screen and (min-width: 769px) {
    width: 400px;
    height: 400px;
    border-width: 16px;
    margin: 0 64px 0 0;
  }
`;

const MeImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const IconGroup = styled.div`
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media only screen and (min-width: 769px) {
    text-align: left;
  }
`;

const CVSection = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 64px 0;
  height: auto;

  @media only screen and (min-width: 769px) {
    background-image: url("geometric.svg");
    background-repeat: no-repeat;
    background-position: right;
  }
`;

const CVContentWrapper = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;

const TechColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 32px;
  width: max-content;

  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 128px;
    margin-bottom: 128px;
  }
`;

const SectionHeading = styled(Heading3)`
  width: min-content;

  &::after {
    content: "";
    display: block;
    background: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.shadow} 35%)`};
    width: 100%;
    height: 4px;
    margin-bottom: 32px;
  }
`;

/**
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
          <MeCircle>
            <MeImg src="/me.jpg" />
          </MeCircle>
          <Content>
            <Heading5 color={Palette.orange}>Software Engineer</Heading5>
            <Heading1>Hans Hoffman</Heading1>
            <IconGroup>
              <ExternalLink href="https://github.com/hansjhoffman">
                <Icon name="github" size={24} />
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/hansjhoffman">
                <Icon name="linkedin" size={24} />
              </ExternalLink>
              <ExternalLink href="https://twitter.com/hansjhoffman">
                <Icon name="twitter" size={24} />
              </ExternalLink>
              <ExternalLink href="https://dev.to/hansjhoffman">
                <Icon name="devto" size={24} />
              </ExternalLink>
              <ExternalLink href="https://twitch.com">
                <Icon name="twitch" size={24} />
              </ExternalLink>
              <ExternalLink href="https://youtube.com">
                <Icon name="youtube" size={24} />
              </ExternalLink>
            </IconGroup>
          </Content>
        </HeroSection>

        <CVSection>
          <CVContentWrapper>
            <SectionHeading>Technologies</SectionHeading>
            <TechColumns>
              <List
                items={[
                  "React",
                  "React Native",
                  "Typescript / Javascript",
                  "React Testing Library",
                  "GraphQL",
                  "Monorepos (Lerna)",
                  "Figma",
                ]}
                title="Pays the bills"
              />
              <List items={["Elixir", "Elm", "Haskell"]} title="One can dream..." />
            </TechColumns>
            <BlockQuote author="Alan Perlis">
              A language that doesn’t affect the way you think about programming is not worth
              knowing.
            </BlockQuote>
          </CVContentWrapper>
        </CVSection>
      </main>
    </>
  );
};

export default Home;
