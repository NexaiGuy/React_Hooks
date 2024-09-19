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
  margin-top: -120px; /* Move the image further upwards */

  perspective: 1000px; /* Add perspective to parent for 3D effect */
  transition: transform 0.8s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */
  
  &:hover {
    transform: rotateX(-15deg) rotateY(-12deg) translateY(-42px); /* 3D Rotation on hover */
    opacity: 94%;
    transition: 1.5s;
  }

  @media (max-width: 1024px) {
    height: 400px; /* Adjust height for tablets */
    margin-top: -80px; /* Move less upward for tablets */
  }

  @media (max-width: 768px) {
    height: 350px; /* Adjust height for smaller tablets */
    margin-top: -60px; /* Move less upward for smaller screens */
  }

  @media (max-width: 480px) {
    height: 40px; /* Adjust height for mobile */
    margin-top: -40px; /* Minimal upward movement for mobile */
  }
`;

const Illustration = styled.img`
  width: 460px;
  height: 485px;
  border-radius: 7px;

  @media (max-width: 1920px) {
    width: 400px;
    height: 420px; /* Adjust size for tablets */
    margin-bottom: 278px;
  }

  @media (max-width: 1024px) {
    width: 400px;
    height: 420px; /* Adjust size for tablets */
  }

  @media (max-width: 768px) {
    width: 340px;
    height: 360px; /* Adjust size for smaller tablets */
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 300px; /* Adjust size for mobile */
  }
`;
