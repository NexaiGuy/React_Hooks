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
  max-wid
`
const Title = styled.p`

`
const Description = styled.p`

`