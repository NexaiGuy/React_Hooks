import * as React from "react";
import styled from "styled-components";
import m1 from "/src/images/illustrations/mockup1.svg";
import m2 from "/src/images/illustrations/mockup2.svg";
import m3 from "/src/images/illustrations/mockup3.svg";
import m4 from "/src/images/illustrations/mockup4.svg";
import m5 from "/src/images/illustrations/mockup5.svg";

export default function ClickProjects() {
  return (
    <Wrapper>
      <div className="mockup1">
        <img src={m1} alt="Mockup 1" />
      </div>
      <div className="mockup2">
        <img src={m2} alt="Mockup 2" />
      </div>
      <div className="mockup3" id="mock">
        <img src={m3} alt="Mockup 3" />
      </div>
      <div className="mockup4">
        <img src={m4} alt="Mockup 4" />
      </div>
      <div className="mockup5">
        <img src={m5} alt="Mockup 5" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 54px auto;
  padding: 200px 30px;
  padding-bottom: 520px;
  display: grid;
  grid-template-columns: 270px auto;
  perspective: 5000;
  perspective-origin: top left;
  min-height: 630px;

  div {
    perspective-origin: top left;
    perspective: 5000;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: rotateY(20deg) rotateX(-20deg);
  }

  div:hover {
    transform: rotateY(0deg) rotateX(0deg);
  }

  .mockup1,
  .mockup2,
  .mockup3,
  .mockup4,
  .mockup5 {
    transition: all 0.3s ease;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: inherit;
    }
  }

  .mockup1 {
    position: absolute;
    width: 180px;
    height: 120px;
    top: 165px;
    left: 600px;
    border-radius: 16px;
    background: radial-gradient(
      285.58% 229.57% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 100%
    );
    box-shadow: 0px 16px 32px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(10px);
  }

  .mockup2 {
    position: absolute;
    width: 180px;
    height: 120px;
    top: 165px;
    left: 820px;
    border-radius: 16px;
    background: linear-gradient(199deg, #4316db 12%, #9076e7 55%, #a2eeff 100%);
    box-shadow: 0px 16px 32px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(10px);
  }

  .mockup3 {
    position: absolute;
    width: 700px;
    height: 430px;
    top: 230px;
    left: 640px;
    border-radius: 6px;
    background: rgba(23, 12, 61, 0.5);
    backdrop-filter: blur(13px);
    box-shadow: 0px 16px 32px rgba(99, 30, 187, 0.5);
  }

  .mockup4 {
    position: absolute;
    width: 400px;
    height: 260px;
    top: 430px;
    left: 1160px;
    border-radius: 13px;
    background: rgba(39, 20, 62, 0.3);
    backdrop-filter: blur(13px);
    box-shadow: 0px 16px 32px rgba(99, 30, 187, 0.5);
  }

  .mockup5 {
    position: absolute;
    width: 400px;
    height: 260px;
    left: 750px;
    top: 430px;
    background: rgba(39, 20, 62, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px;
    box-shadow: 0px 16px 32px rgba(99, 30, 187, 0.5);
  }

  /* Media Queries for responsiveness */
  @media (max-width: 1200px) {
    .mockup1 {
      width: 150px;
      height: 100px;
      top: 150px;
      left: 300px;
    }
    .mockup2 {
      width: 150px;
      height: 100px;
      top: 150px;
      left: 500px;
    }
    .mockup3 {
      width: 500px;
      height: 300px;
      top: 200px;
      left: 200px;
    }
    .mockup4 {
      width: 300px;
      height: 200px;
      top: 350px;
      left: 600px;
    }
    .mockup5 {
      width: 300px;
      height: 200px;
      top: 350px;
      left: 300px;
    }
  }

  @media (max-width: 768px) {
    .mockup1 {
      width: 120px;
      height: 80px;
      top: 120px;
      left: 20px;
    }
    .mockup2 {
      width: 120px;
      height: 80px;
      top: 120px;
      left: 160px;
    }
    .mockup3 {
      width: 400px;
      height: 250px;
      top: 180px;
      left: 50px;
    }
    .mockup4 {
      width: 250px;
      height: 150px;
      top: 300px;
      left: 200px;
    }
    .mockup5 {
      width: 250px;
      height: 150px;
      top: 300px;
      left: 100px;
    }
  }

  @media (max-width: 480px) {
    .mockup1 {
      width: 80px;
      height: 60px;
      top: 90px;
      left: 10px;
    }
    .mockup2 {
      width: 80px;
      height: 60px;
      top: 90px;
      left: 110px;
    }
    .mockup3 {
      width: 250px;
      height: 150px;
      top: 140px;
      left: 10px;
    }
    .mockup4 {
      width: 180px;
      height: 120px;
      top: 220px;
      left: 10px;
    }
    .mockup5 {
      width: 180px;
      height: 120px;
      top: 220px;
      left: 200px;
    }
  }
`;
