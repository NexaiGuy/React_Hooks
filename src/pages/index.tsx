import * as React from "react";
import styled from "styled-components";
import logo from "../static/images/logos/logo.gif";
import logo2 from "../static/images/logos/logo2.gif";
import { useWindowSize } from "react-use";
import "../components/layout.css";
import 'animate.css';
import Header from "/src/components/header"; 

import CourseCard from "../components/cards/CourseCard";
import FlutterBuild from "../components/builds/FlutterBuild";
import GridSection from "../components/sections/GridSection";
import ClickProjects from "../components/sections/ClickProjects";
import GridProjects from "../components/sections/GridProjects";
import BioSection from "../components/sections/BioSection";
import PurchaseButton from "../components/buttons/PurchaseButton";
import { useEffect } from "react";

const IndexPage = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    const scriptThree = document.createElement("script");
    scriptThree.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    scriptThree.async = true;
    document.body.appendChild(scriptThree);

    const scriptVanta = document.createElement("script");
    scriptVanta.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.halo.min.js";
    scriptVanta.async = true;
    document.body.appendChild(scriptVanta);

    scriptVanta.onload = () => {
      if (window.VANTA) {
        window.VANTA.HALO({
          el: "#my-background",
          color: 0x000000,
          backgroundColor: 0x0d0d0d,
          shininess: 1,
          waveHeight: 420,
          waveSpeed: 1,
          zoom: 1,
          size: 1,
          amplitudeFactor: 10,
        });
      }
    };

    return () => {
      document.body.removeChild(scriptThree);
      document.body.removeChild(scriptVanta);
    };
  }, []);

  return (
    <Wrapper id="my-background">
      <Header />
      <ContainerWrapper>
      <HeroWrapper id="my-background">
        <CourseCard />
        <TextWrapper>
          <LogoWrap>
            <LogoCon>
              <a href="https://nexai.beehiiv.com/" target="_blank">
                <Logo2 className="animate__animated animate__fadeInDownBig illustration" src={logo2} alt="icon" />
              </a>
            </LogoCon>
            <LogoCon2>
              <a href="https://bikera.org/" target="_blank">
                <Logo className="animate__animated animate__fadeInDownBig illustration" src={logo} alt="icon" />
              </a>
            </LogoCon2>
          </LogoWrap>
          <Title className="animate__animated animate__lightSpeedInRight illustration">
            <HoverableWord>Portfolio</HoverableWord> <br />
            <HoverableWord>Kevin</HoverableWord> <br />
            <HoverableWord>Blancaflor</HoverableWord>
          </Title>
          <Caption>Check Out my</Caption>
          <Caption>Websites | Skills | Projects</Caption>
          <Description>Welcome on an overview of the guy with a grinding personality & perception.</Description>
          <AuthorWrapper>
            <Caption>Brought to you by *Kevin*</Caption>
          </AuthorWrapper>
          <PurchaseButton />
          <SmallText>
            Small introduction about a (Web Developer) located in Ghent | Belgium <br /> ⚜ Founder ⚜ @ ~ Nex AI © ~ Bikera ©
          </SmallText>
        </TextWrapper>
      </HeroWrapper>
      <ContentWrapper>
        <div id="click-projects">
          <ClickProjects />
        </div>
      </ContentWrapper>
      <Divider />
      <GridSection id="Skills" />
      <Divider2 />
      <div id="Projects">
        <GridProjects />
      </div>
      <Divider3 />
      <BioSection />
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
      </ContainerWrapper>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  background: linear-gradient(180.44deg, #0C0D31 25.57%, #000000);
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  height: 10000px;

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

const ContainerWrapper = styled.div`
  overflow: visible;
`

const ContentWrapper = styled.div`
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  margin-top: -182px;
  margin-left: 20px;

  @media (max-width: 768px) {
    justify-items: center;
    text-align: center;
    margin-left: 0;
    margin-top: 36px;
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
    padding-top: 150px;
  }
`;

const Logo = styled.img`
  width: 84px;
  height: 84px;
  margin-right: 18px;
  margin-top: 17px;

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const LogoCon = styled.div`
  transition: transform 0.6s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-20px);
  }
`;

const Logo2 = styled.img`
  width: 120px;
  height: 120px;

  @media (max-width: 768px) {
    width: 93px;
    height: 93px;
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    margin-top: 8px;
  }
`;

const LogoCon2 = styled.div`
  transition: transform 0.6s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-20px);
  }
`;

const LogoWrap = styled.div`
  display: flex;
  margin-top: 100px;
  margin-left: -28px;

  @media (max-width: 1920px) {
    margin-left: 0;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }

  .animate__fadeInDownBig {
    animation-duration: 1.3s;
  }
`;

const Title = styled.h1`
  max-width: 500px;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  animation-duration: 1.4s;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const HoverableWord = styled.span`
  display: inline-block;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-10px);
  }

  box-shadow: 0px 0px 105px 45px rgba(251, 255, 138, 0.03);
  border-radius: 7px;
`;

const Caption = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 130%;
  text-transform: uppercase;
  color: #96D5E0;
  box-shadow: 0px 0px 105px 45px rgba(251, 255, 138, 0.009);
  animation: HeroAnimation 3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Description = styled.p`
  color: #DE6E2E;
  box-shadow: 0px 0px 105px 45px rgba(251, 255, 138, 0.05);
  border-radius: 7px;
  animation: HeroAnimation 3s ease;
  transition: transform 0.5s ease;
  font-weight: 800;

  &:hover {
    transform: translateY(-7px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SmallText = styled.p`
  max-width: 285px;
  font-size: 13px;
  font-family: "SUSE", sans-serif;
  line-height: 200%;
  color: #9EE0EC;
  animation: HeroAnimation 3s ease;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const FlutterWrapper = styled.div`
  margin: 690px auto;

  @media (max-width: 1440px) {
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }

  @media (max-width: 768px) {
    margin-top: 500px;
  }

  @media (max-width: 480px) {
    margin-top: 400px;
  }
`;

const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 150px auto 32px;

  @media (max-width: 768px) {
    margin: 100px auto 20px;
  }

  @media (max-width: 480px) {
    margin: 80px auto 16px;
  }
`;

const Divider2 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 100px auto 32px;
  margin-bottom: 137px;

  @media (max-width: 768px) {
    margin: 80px auto 20px;
  }

  @media (max-width: 480px) {
    margin: 60px auto 16px;
  }
`;

const Divider3 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 0px auto 32px;

  @media (max-width: 768px) {
    margin: 60px auto 20px;
  }

  @media (max-width: 480px) {
    margin: 40px auto 16px;
  }
`;
