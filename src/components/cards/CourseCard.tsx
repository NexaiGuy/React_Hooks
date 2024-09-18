import React from "react";
import styled from "styled-components";

import Illu from "/src/images/illustrations/illustration-1.jpg";

function CourseCard(props) {
  return (
    <Wrapper className="courseCard">
      <div className="illustration animate__animated animate__fadeInDownBig illustration">
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
  border-radius: 20px;
  
  perspective: 1000px; /* Add perspective to parent for 3D effect */
  transition: transform 0.8s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: rotateX(-15deg) rotateY(-12deg) translateY(-42px); /* 3D Rotation on hover */
    opacity: 94%;
    transition: 1.5s;
  }
`;



const Illustration = styled.img`
  width: 460px;
  height: 485px;
  border-radius: 7px;

`;
