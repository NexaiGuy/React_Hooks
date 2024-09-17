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

  div {
    perspective-origin: top left;
    perspective: 5000;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1); /* Add transition here */
    transform: rotateY(20deg) rotateX(-20deg); /* Initial transform */
  }

  div:hover {
    transform: rotateY(0deg) rotateX(0deg); /* Reset transform on hover */
  }

  .mockup1 {
    position: absolute;
    width: 183px;
    height: 120.179px;
    top: 165px;
    left: 602px;
    flex-shrink: 0;
    border-radius: 16.388px;
    border: 0.273px solid rgba(255, 255, 255, 0.3);
    background: radial-gradient(
      285.58% 229.57% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
    box-shadow: 0px 16.388px 32.776px 0px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(10.925px);
  }

  .mockup2 {
    position: absolute;
    width: 182.937px;
    height: 120.137px;
    top: 165px;
    left: 816.05px;
    flex-shrink: 0;
    border-radius: 16.382px;
    border: 0.273px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(
      199deg,
      #4316db 12.72%,
      #9076e7 54.49%,
      #a2eeff 100.01%
    );
    box-shadow: 0px 16.388px 32.776px 0px rgba(99, 30, 187, 0.5);
    backdrop-filter: blur(10.921px);
  }

  .mockup3 {
    position: absolute;
    width: 701.041px;
    height: 427.881px;
    top: 225px;
    left: 639px;
    flex-shrink: 0;
    border-radius: 6.846px;
    border: 0.342px solid rgba(255, 255, 255, 0.2);
    background: rgba(23, 12, 61, 0.5);
    backdrop-filter: blur(13.692px);
    box-shadow: 0px 16.388px 32.776px 0px rgba(99, 30, 187, 0.5);
  }

  .mockup4 {
    position: absolute;
    width: 399.95px;
    height: 273.84px;
    flex-shrink: 0;
    top: 440.52px;
    left: 1081px;
    display: inline-flex;
    padding: 13.692px;
    align-items: flex-start;
    gap: 13.692px;
    border-radius: 13.692px;
    border: 0.342px solid rgba(255, 255, 255, 0.2);
    background: rgba(39, 20, 62, 0.3);
    backdrop-filter: blur(13.692px);
  }

  .mockup5 {
    position: absolute;
    width: 412px;
    height: 254px;
    left: 754px;
    top: 428px;
    background: rgba(39, 20, 62, 0.2);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 8px;
  }
`;
