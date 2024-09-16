import React from "react";
import styled from "styled-components";

import Circles from "../animations/Circles";
import Illu from "/src/images/illustrations/illustration-1.png";

function CourseCard(props) {
  return (
    <Wrapper className="courseCard">
      <AnimationWrapper>
        <Circles />
      </AnimationWrapper>
      <div className="illustration">
        <Illustration src={Illu} alt="Credit Icon" />
      </div>
    </Wrapper>
  );
}

export default CourseCard;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  max-width: 360px;
  width: 100%;
  height: 480px;
  background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
  perspective: 1000px; /* Add perspective to parent for 3D effect */
  transition: transform 0.5s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: rotateX(-15deg) rotateY(-12deg); /* 3D Rotation on hover */
  }
`;

const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  overflow: hidden;
  padding-top: 30px;
  mix-blend-mode: overlay;
`;

const Illustration = styled.img`
  width: 300px;
  
`;
