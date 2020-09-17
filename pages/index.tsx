import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";
import { ExternalLink } from "@ui/components/ExternalLink";
import { Icon } from "@ui/components/Icon";
import { Heading1, Heading5, Text } from "@ui/components/Typography";
import { Palette } from "@ui/theme";

/*
 * Styles
 */

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: inherit;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const MeCircle = styled.div`
  width: 224px;
  height: 224px;
  border-radius: 50%;
  overflow: hidden;
  border: 16px solid #fff;
  border-color: #303436;
  margin: 0 0 32px 0;

  @media only screen and (min-width: 769px) {
    width: 400px;
    height: 400px;
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
      </main>
    </>
  );
};

export default Home;
