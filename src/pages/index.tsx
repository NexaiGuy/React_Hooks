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
              <LogoCon>
                <a href="https://nexai.beehiiv.com/" target="_blank"><Logo2 className="animate__animated animate__fadeInDownBig illustration" src={logo2} alt="icon" /></a>
              </LogoCon>
              <LogoCon2>
                <a href="https://bikera.org/" target="_blank"><Logo className="animate__animated animate__fadeInDownBig illustration" src={logo} alt="icon" /></a>
              </LogoCon2>
            </LogoWrap>
            <Title className="animate__animated animate__lightSpeedInRight illustration">
              <HoverableWord>Portfolio</HoverableWord> <br /> 
              <HoverableWord>Kevin</HoverableWord> <br />
              <HoverableWord>Blancaflor</HoverableWord>
            </Title>
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
  background: linear-gradient(180.44deg, #0C0D31 25.57%, #000000);
  overflow: hidden;
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
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

const LogoCon = styled.div`
  transition: transform 0.6s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */

  &:hover {
    transform: translateY(-20px); /* 3D Rotation on hover */
  }
`

const Logo2 = styled.img`
  width: 120px;
  height: 120px;
`;

const LogoCon2 = styled.div`
  transition: transform 0.6s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */

  &:hover {
    transform: translateY(-20px); /* 3D Rotation on hover */
  }
`

const LogoWrap = styled.div`
  display: flex;
  display: right;
  display: inline-flex;
  margin-top: 100px;
  margin-left: -28px;

  .animate__fadeInDownBig {
    animation-duration: 1.3s;
  }
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
`;

const HoverableWord = styled.span`
  display: inline-block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: translateY(-10px); /* Lift up on hover */
  }

  -webkit-box-shadow:0px 0px 105px 45px rgba(251,255,138,0.03);
  -moz-box-shadow: 0px 0px 105px 45px rgba(251,255,138,0.03);
  box-shadow: 0px 0px 105px 45px rgba(251,255,138,0.03);
  border-radius: 7px;
`;

const Caption = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 130%;
  text-transform: uppercase;
  color: #96D5E0;
  animation: HeroAnimation;
  animation-duration: 3s;

  transition: transform 0.5s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */

  &:hover {
    transform: translateY(-10px); /* 3D Rotation on hover */
  }  
`;

const Description = styled.p`
  color: #DE6E2E;
  -webkit-box-shadow:0px 0px 105px 45px rgba(251,255,138,0.05);
  -moz-box-shadow: 0px 0px 105px 45px rgba(251,255,138,0.05);
  box-shadow: 0px 0px 105px 45px rgba(251,255,138,0.05);
  border-radius: 7px;
  animation: HeroAnimation;
  animation-duration: 3s;
  transition: transform 0.5s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: translateY(-7px); /* 3D Rotation on hover */
  }
`;

const SmallText = styled.p`
  max-width: 285px;
  font-style: normal;
  font-size: 13px;
  font-family: "SUSE", sans-serif;
  line-height: 200%;
  color: #9EE0EC;
  animation: HeroAnimation;
  animation-duration: 3s;
`;

const FlutterWrapper = styled.div`
  margin: 380px auto;

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
  margin: 100px auto 32px;
  margin-bottom: 137px;
`;
const Divider3 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0px auto 32px;
`
