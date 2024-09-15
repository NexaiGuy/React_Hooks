import * as React from "react";
import styled from "styled-components";
import logo from "/src/static/images/logos/logo.svg"; 

const IndexPage = () => 
  <Wrapper>
    <Logo src={logo} alt="icon" />
    <Title>Build a web app with React Hooks</Title>
    <Caption>20 sections - 3hours of videos</Caption>
    <Description>Learn how we build the new DesignCode site with React Hooks</Description>
  </Wrapper>

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7)
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
  display: inline-block;
  vertical-align: middle;
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: ; 
  `

const Caption = styled.p`

`

const Description = styled.p`

`

