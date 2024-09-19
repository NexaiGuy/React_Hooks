import React from "react"
import styled from "styled-components"

function SectionRow(props) {
const {index, title, description, timestamp} = props    

    return <Wrapper>
        <Index>{index}</Index>
        <TextWrapper>
            <Title>{title}</Title>
            <ProgressBar />
            <Description>{description}</Description>
        </TextWrapper>
        <Timestamp>{timestamp}</Timestamp>
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
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  border-radius: 10px;
  font-optical-sizing: auto;

  :hover {
    background: rgba(68, 66, 178, 0.1);
    box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
  }

  transition: transform 0.33s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */

  &:hover {
    transform: translateY(-10px); /* 3D Rotation on hover */
  } 
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
  color: #ffffff;
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
  font-size: 20px;
  line-height: 18px;
  color: #3FB2F4;
`

const ProgressBar = styled.div`
  width: 170px;
  height: 5px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 8px;
`

const Description = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  color: white;
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
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
`