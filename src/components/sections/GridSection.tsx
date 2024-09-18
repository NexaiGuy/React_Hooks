import React from "react"
import styled from "styled-components"

import SectionRow from "../rows/SectionRow"
import { sections } from "../data/sectionData"

function GridSection() {
    return <Wrapper>
             <Title>SKILLS</Title>
             <Description>
                 All my skills are explained step-by-step, in a way so that you can easily follow.
             </Description>
             <Grid>
               {sections.map((section, index) => (
                 <SectionRow
                   key={index} 
                   index={index + 1} 
                   title={ section.title} 
                   description={ section.description} 
                   timestamp={ section.duration}
                 />
               ))}
             </Grid>
            </Wrapper>
}

export default GridSection

const Wrapper = styled.div`
  position: relative;
  display: grid;
  max-width: 1234px;
  margin: 0 auto;
  text-align: center;
  gap: 12px;
  padding: 100px 20px;
  padding-bottom: 80px;
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;

`
const Title = styled.p`
  font-style: normal;
  font-size: 27px;
  font-weight: bold;
  line-height: 130%;
  text-transform: uppercase;
  color: #3FB2F4;
  margin-bottom: 20px;

  margin: 0 auto;
  max-width: 100%;
  padding: 0 36px;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.9);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  background: linear-gradient(370deg, rgba(187, 86, 112, 0.5), rgba(71, 28, 171, 0.5), rgba(63,176,244, 0.5));

  transition: transform 0.6s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */

  &:hover {
    transform: rotateY(360deg);
    transition: transform 0.5s ease-in-out; /* Smooth animation */
    transform-style: preserve-3d; /* Preserve 3D effect */
    perspective: 1000px; /* Create perspective for 3D effect */
    opacity: 81%;
    transition: 1s;
  }
`;

const Description = styled.p`
  max-width: 600px;
  font-size: 16px;
  line-height: 33px;
  color: #98D1E9;
  margin: 0 auto 20px;

  width: 100%;
  padding: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  background: linear-gradient(370deg, rgba(187, 86, 112, 0.5), rgba(71, 28, 171, 0.1), rgba(63,176,244, 0.5));
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
  width: 100%;
  padding: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  background: linear-gradient(370deg, rgba(187, 86, 112, 0.5), rgba(71, 28, 171, 0.1), rgba(63,176,244, 0.5));
`;
