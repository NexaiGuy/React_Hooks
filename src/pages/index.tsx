import * as React from "react";
import styled from "styled-components";
import logo from "../static/images/logos/logo.svg";
import Meng from "../static/avatars/Meng.svg";
import { useWindowSize } from "react-use";
import "../components/layout.css"
import 'animate.css';

import CourseCard from "../components/cards/CourseCard";
import FlutterBuild from "../components/builds/FlutterBuild";
import GridSection from "../components/sections/GridSection";
import ClickProjects from "../components/sections/ClickProjects";
import GridProjects from "../components/sections/GridProjects";
import PurchaseButton from "../components/buttons/PurchaseButton";

const IndexPage = () => {
  const { width } = useWindowSize();

  return (
    <Wrapper>
      <HeroWrapper>
        <CourseCard />
        <TextWrapper>
          <Logo className="animate__animated animate__lightSpeedInRight illustration" src={logo} alt="icon" />
          <Title className="animate__animated animate__lightSpeedInRight illustration">Portfolio <br /> Kevin Blancaflor</Title>
          <Caption>Check Out my Websites | Skills | Projects</Caption>
          <Description>Welcome on the overview of a guy with a grinding personality & perception.</Description>
          <AuthorWrapper>
            <AuthorImage src={Meng} alt="author image" />
            <Caption>Brought to you by ( Nex AI )</Caption>
          </AuthorWrapper>
          <PurchaseButton />
          <SmallText>Small introduction about a "Web Developer" from Ghent | Belgium. <br /> Organisations: ⚜ | Nex AI™ | - | Bikera™ | ⚜</SmallText>
        </TextWrapper>
      </HeroWrapper>
      <ContentWrapper>
        <div id="click-projects">
          <ClickProjects />
        </div>
      </ContentWrapper>
      <Divider />
      <GridSection />
      <GridProjects />
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7);
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

  transition: transform 0.5s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: rotateY(11deg); /* 3D Rotation on hover */
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
  width: 60px;
  height: 60px;
`;

const Title = styled.h1`
  max-width: 500px;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0,0,0, 0.3);
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  animation-duration: 1.4s; /* don't forget to set a duration! */
`;

const Caption = styled.p`
  font-size: 15px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255,255,255, 0.7);
`;

const Description = styled.p`
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
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
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
  margin: 60px auto 32px;
`;