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
  font-family: "SUSE", sans-serif;
`
const Title = styled.p`
  font-style: normal;
  font-size: 27px;
  font-weight: bold;
  line-height: 130%;
  text-transform;
  color: #ffffff;
`
const Description = styled.p`
  max-width: 460px;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  margin: 0 auto;
`

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
  background: linear-gradient(370deg, #BB5670, #471CAB);
`