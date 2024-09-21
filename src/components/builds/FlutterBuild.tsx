import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

import useMousePosition from "../../hooks/useMousePosition";

import man from "/src/images/components/flutter/man.svg";
import iphone from "/src/images/components/flutter/iphone.png";
import pixel4 from "/src/images/components/flutter/pixel4.png";
import background3 from "/src/images/components/flutter/background3.svg";
import background2 from "/src/images/components/flutter/background2.svg";
import background1 from "/src/images/components/flutter/background1.svg";

function FlutterBuild() {
  const ref = useRef(null);
  const [centerX, centerY, bind] = useMousePosition(ref);

  return (
    <Wrapper ref={ref} {...bind}>
      <div
        style={{
          transform: `
          rotateX(${centerY / 20}deg)
          rotateY(${centerX / 20}deg)
          `,
        }}
      >
        <div
          className="shapes"
          style={{
            transform: `
          translateX(${centerX / 2.5}px)
          translateY(${centerY / 2.5}px)
            `,
          }}
        >
          <div className="shape" />
          <div className="genericpanel shape2" />
          <div className="genericpanel shape3" />
          <div className="genericpanel shape4" />
          <div className="genericpanel shape5" />
          <div className="genericpanel shape6" />
        </div>

        <img
          className="man"
          src={man}
          style={{
            transform: `
          translateX(${centerX / 2}px)
          translateY(${centerY / 2}px)
            `,
          }}
        />
        <img
          className="phone-left"
          src={iphone}
          style={{
            transform: `
          translateX(${centerX / 2.5}px)
          translateY(${centerY / 2.5}px)
            `,
          }}
        />
        <img
          className="phone-right"
          src={pixel4}
          style={{
            transform: `
          translateX(${centerX / 3}px)
          translateY(${centerY / 3}px)
            `,
          }}
        />
        <div
          className="circle1"
          style={{
            transform: `
          translateX(${centerX / 2}px)
          translateY(${centerY / 2}px)
            `,
          }}
        />
        <div
          className="circle2"
          style={{
            transform: `
          translateX(${centerX / 3}px)
          translateY(${centerY / 3}px)
            `,
          }}
        />
        <div
          className="circle3"
          style={{
            transform: `
          translateX(${centerX / 5}px)
          translateY(${centerY / 5}px)
            `,
          }}
        />

        <div
          className="circle4"
          style={{
            transform: `
          translateX(${centerX / 6}px)
          translateY(${centerY / 6}px)
            `,
          }}
        />
        <div
          className="circle5"
          style={{
            transform: `
          translateX(${centerX / 3}px)
          translateY(${centerY / 3}px)
            `,
          }}
        />
        <div
          className="circle6"
          style={{
            transform: `
          translateX(${centerX / 8}px)
          translateY(${centerY / 8}px)
            `,
          }}
        />

        <img
          className="background3"
          src={background3}
          style={{
            transform: `
          translateX(${centerX / 5}px)
          translateY(${centerY / 5}px)
            `,
          }}
        />
      </div>
    </Wrapper>
  );
}

export default FlutterBuild;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 100px;
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 4s;
  animation-fill-mode: forwards;

  * {
    transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;
  }

  .shape,
  .genericpanel,
  .man,
  .phone-left,
  .phone-right,
  .circle1,
  .circle2,
  .circle3,
  .circle4,
  .circle5,
  .circle6 {
    position: absolute;
  }

  .shape {
    width: 200px;
    height: 50px;
    border-radius: 20px 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    top: 228px;
    left: 277px;
    background: rgba(255, 198, 194, 0.4);
    backdrop-filter: blur(40px);
    z-index: 6;
  }

  .genericpanel {
    width: 144px;
    height: 30px;
    border-radius: 15px 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    z-index: 6;
  }
  .shape2 {
    top: 293px;
    left: 344px;
    background: rgba(255, 198, 194, 0.4);
  }
  .shape3 {
    top: 335px;
    left: 370px;
    background: rgba(204, 235, 230, 0.4);
  }
  .shape4 {
    top: 377px;
    left: 390px;
    background: rgba(204, 235, 230, 0.4);
  }
  .shape5 {
    top: 419px;
    left: 414px;
    background: rgba(204, 235, 230, 0.4);
  }
  .shape6 {
    top: 460px;
    left: 438px;
    background: rgba(255, 198, 194, 0.4);
  }

  /* Positioning for man and phones */
  .man {
    top: 110px;
    left: 500px;
    z-index: 7;
  }
  .phone-left {
    width: 427px;
    height: 465px;
    top: 168px;
    left: 198px;
    z-index: 1;
  }
  .phone-right {
    width: 427px;
    height: 465px;
    top: 152px;
    left: 705px;
    z-index: 2;
  }

  .background3 {
    top: -123px;
    left: 239px;
    z-index: 1;
    mix-blend-mode: overlay;
  }

  /* Circles */
  .circle1 {
    top: 93px;
    left: 552px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle2 {
    top: 8px;
    left: 671px;
    width: 228px;
    height: 228px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle3 {
    top: 96px;
    left: 838px;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle4 {
    top: 23px;
    left: 1070px;
    width: 118px;
    height: 118px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle5 {
    top: 624px;
    left: 852px;
    width: 162px;
    height: 162px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle6 {
    top: 714px;
    left: 965px;
    width: 79px;
    height: 79px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 1200px) {
    .shape, .genericpanel, .man, .phone-left, .phone-right, .circle1, .circle2, .circle3, .circle4, .circle5, .circle6 {
      transform: scale(0.9);
    }
  }

  @media (max-width: 992px) {
    .shape, .genericpanel, .man, .phone-left, .phone-right, .circle1, .circle2, .circle3, .circle4, .circle5, .circle6 {
      transform: scale(0.75);
    }
  }

  @media (max-width: 768px) {
    .shape, .genericpanel, .man, .phone-left, .phone-right, .circle1, .circle2, .circle3, .circle4, .circle5, .circle6 {
      transform: scale(0.6);
    }

    .man {
      left: 300px;
    }
    .phone-left {
      width: 250px;
      left: 100px;
    }
    .phone-right {
      width: 250px;
      left: 450px;
    }
  }

  @media (max-width: 576px) {
    .shape, .genericpanel, .man, .phone-left, .phone-right, .circle1, .circle2, .circle3, .circle4, .circle5, .circle6 {
      transform: scale(0.45);
    }

    .man {
      left: 100px;
    }
    .phone-left {
      width: 180px;
      left: 50px;
    }
    .phone-right {
      width: 180px;
      left: 250px;
    }

    .background1,
    .background2,
    .background3 {
      display: none;
    }
  }

  @media (max-width: 375px) {
    .shape, .genericpanel, .man, .phone-left, .phone-right, .circle1, .circle2, .circle3, .circle4, .circle5, .circle6 {
      transform: scale(0.3);
    }

    .man {
      left: 50px;
    }
    .phone-left {
      width: 120px;
      left: 20px;
    }
    .phone-right {
      width: 120px;
      left: 150px;
    }
  }
`;
