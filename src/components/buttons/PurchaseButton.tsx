import React from "react";
import styled from "styled-components";
import Credit from "/src/images/icons/check.svg";
import IconRing from "/src/images/icons/icon-ring.svg";

function PurchaseButton() {
  const handleClick = () => {
    const clickProjects = document.getElementById('click-projects');
    clickProjects.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper onClick={handleClick}>
      <IconWrapper>
        <Ring src={IconRing} alt="Icon Ring" />
        <Icon src={Credit} alt="Credit Icon" />
      </IconWrapper>
      <TextWrapper>
        <Title>Go Next Level</Title>
        <Subtitle>Click to Scroll Down</Subtitle>
      </TextWrapper>
    </Wrapper>
  );
}

export default PurchaseButton;

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  margin-top: 40px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 63px auto;
  align-items: center;
  gap: 20px;
  animation: HeroAnimation;
  animation-duration: 3s;
  
  transition: transform 0.5s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: translateY(-4px); /* 3D Rotation on hover */
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 8px;
  text-align: start;
  font-family: "SUSE", sans-serif;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: black;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: black;
  opacity: 0.7;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  transition: transform 0.3s ease;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.1) translate(1px, 1px);
  }
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 4.57%, #3EB0F3 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  transition: filter 0.3s ease; /* Smoother transition on hover */

  ${Wrapper}:hover & {
    filter: brightness(120%) saturate(120%);
  }
`;