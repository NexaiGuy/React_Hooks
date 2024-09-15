import React from "react"
import styled from "styled-components"

function GridSection() {
    return <Wrapper>
        <Title>20 topics</Title>
        <Description>All techniques are explained step-by-step, in a beginner-friendly way so that you can easily follow in a cohesive way.</Description>
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
  font-s
`