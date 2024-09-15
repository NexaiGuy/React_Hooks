import React from "react"
import styled from "styled-components"

function SectionRow() {
    return <Wrapper>
        <Index>1</Index>
    </Wrapper>
}

export default SectionRow

const Wrapper = styled.div`
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
  background: rgba(68, 6);
`