import React from "react"
import styled from "styled-components"

import SectionRow from "../rows/SectionRow"
import { sections } from "../data/sectionData"

function GridSection() {
    return <Wrapper>
        <Title>20 topics</Title>
        <Description>
            All techniques are explained step-by-step, in a beginner-friendly way so that you can easily follow in a cohesive way.
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
  padding: 0 20px;
`
const Title = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform;
  color: #ffffff;

`
const Description = styled.p`
  max-width: 460ox;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`