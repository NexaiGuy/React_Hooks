import * as React from "react"
import styled from "styled-components"

const IndexPage = () => 
  <Wrapper>
    <Logo src={require('advancedHooks\src\static\images\logos\logo.svg').default} alt='mySvgImage' />
  </Wrapper>

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7)
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`
