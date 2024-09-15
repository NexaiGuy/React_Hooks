import React from "react"
import styled from "styled-components"

function SectionRow() {
    return <Wrapper>
        <Index>1</Index>
        <TextWrapper>
            <Title>Introduction to Visual Design</Title>
            <ProgressBar />
            <Description>Learn the foundations of UI design and start designing an app with me.</Description>
        </TextWrapper>
        <Timestamp></Timestamp>
    </Wrapper>
}

export default SectionRow

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 36px auto;
  gap: 10px;
  max-width: 370px;
  padding: 10px;
  background: rgba(68, 66, 178, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
  border-radius: 10px;
`

const Index = styled.div`
  display: grid;
  width: 36px;
  height: 36px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 50%;
  place-items: center;

  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 8px;
  text-align: start;
`

const Title = styled.div`
  max-width: 180px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #3913b8;
`

const ProgressBar = styled.div`
  width: 170px;
  height: 5px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 8px;
`

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #192150;
`

const Timestamp = styled.div`
  position: absolute;
  display: grid;
  top: 10px;
  right: 10px;
  height: 20px;
  padding: 2px 6px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 5px;
  place-items: center;

  font-style: normal;
  font
`