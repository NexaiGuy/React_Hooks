import * as React from "react";
import styled from "styled-components";
import logo from "../static/images/logos/logo.gif";
import logo2 from "../static/images/logos/logo2.gif";
import { useWindowSize } from "react-use";
import "../components/layout.css"
import 'animate.css';

import CourseCard from "../components/cards/CourseCard";
import FlutterBuild from "../components/builds/FlutterBuild";
import GridSection from "../components/sections/GridSection";
import ClickProjects from "../components/sections/ClickProjects";
import GridProjects from "../components/sections/GridProjects";
import BioSection from "../components/sections/BioSection";
import PurchaseButton from "../components/buttons/PurchaseButton";

const IndexPage = () => {
  const { width } = useWindowSize();

  return (
    <Wrapper>
      <HeroWrapper>
        <CourseCard />
        <TextWrapper>
          <LogoWrap>
             <Logo2 className="animate__animated animate__lightSpeedInRight illustration" src={logo2} alt="icon" />
             <Logo className="animate__animated animate__lightSpeedInRight illustration" src={logo} alt="icon" />
          </LogoWrap>
          <Title className="animate__animated animate__lightSpeedInRight illustration">Portfolio <br /> Kevin Blancaflor</Title>
          <Caption>Check Out my: <br /><br /> Websites  |  Skills  &  Projects </Caption>
          <Description>Welcome on an overview of the guy with a grinding personality & perception.</Description>
          <AuthorWrapper>
            <Caption>Brought to you by *Kevin*</Caption>
          </AuthorWrapper>
          <PurchaseButton />
          <SmallText>Small introduction about a (Web Developer) located in Ghent | Belgium <br /> ⚜ Founder ⚜ @ ~ Nex AI © ~ Bikera © </SmallText>
        </TextWrapper>
      </HeroWrapper>
      <ContentWrapper>
        <div id="click-projects">
          <ClickProjects />
        </div>
      </ContentWrapper>
      <Divider />
      <GridSection />
      <Divider2 />
      <GridProjects />
      <Divider3 />
      <BioSection />
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  background: linear-gradient(180.44deg, #0C0D31	 25.57%, #000000);
  overflow: hidden;
  font-family: "SUSE", sans-serif;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  margin-top: -182px;
  margin-left: 20px;
  transition: transform 0.5s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: rotateY(15deg); /* 3D Rotation on hover */
  }

  @media (max-width) {
    justify-items: center;
    text-align: center;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 74px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Logo = styled.img`
  width: 84px;
  height: 84px;
  margin-right: 18px;
  margin-top: 17px;
`;

const Logo2 = styled.img`
  width: 120px;
  height: 120px;

`;

const LogoWrap = styled.div`
  display: flex;
  display: right;
  margin-top: 100px;
  margin-left: -28px;
`



const Title = styled.h1`
  max-width: 500px;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0,0,0, 0.1);
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  animation-duration: 1.4s; /* don't forget to set a duration! */
  text-shadow: 
    0px 1px 3px rgba(0, 0, 0, 0.1),    /* Small external shadow */
    0px 20px 40px rgba(146,207,218, 0.3), /* Larger glowing shadow for a stronger glow */
    0px 0px 10px rgba(255, 255, 255, 0), /* Stronger white highlight for shine */
    0px 0px 20px rgba(146,207,218, 0.1), /* Additional white layer for more shine */
    0px 0px 30px rgba(23, 0, 102, 0.2); /* Final large purple shadow for soft glow */
`;

const Caption = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 130%;
  text-transform: uppercase;
  color: #96D5E0;
`;

const Description = styled.p`
  color: #DE6E2E;
`;

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`;

const SmallText = styled.p`
  max-width: 280px;
  font-style: normal;
  font-size: 13px;
  font-family: "SUSE", sans-serif;
  line-height: 200%;
  color: #9EE0EC;
`;

const FlutterWrapper = styled.div`
  margin: 100px auto;

  @media (max-width: 1440px){
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }
`;

const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 150px auto 32px;
`;
const Divider2 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 80px auto 32px;
  margin-bottom: 137px;
`;
const Divider3 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0px auto 32px;
  margin-bottom: 90px;
`;