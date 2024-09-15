import * as React from "react";
import styled from "styled-components";
import logo from "/src/static/images/logos/logo.svg"; 

const IndexPage = () => 
  <Wrapper>
    <Logo src={logo} alt="icon" />
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

`

