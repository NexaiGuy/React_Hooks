import * as React from "react";
import styled from "styled-components";

export default function BioSection() {
  return (
    <Wrapper>
      <div>
        <Title>BIO</Title>
        <Bio>
            <Name>Kevin Blancaflor</Name>
            <Expertise>Web Developer | Tech & Marketing Expert</Expertise>
            <Description>
               I am an experienced and dedicated web developer with a strong foundation in React, React Native, Python, and Blockchain technologies.
               <br /><br /> 
               My primary focus is on creating user-friendly, performance-driven web and mobile applications, blending functionality with a seamless user experience.
            </Description>
            <Divider />
            <Text>I have a deep understanding of modern technologies, including:</Text>
            <List>
                <ul>
                    <li>React (2017): Expertise in component-based development for building dynamic and efficient web applications.</li>
                    <li>React Native (2021): Skilled in building cross-platform mobile applications with shared React code for iOS and Android.</li>
                    <li>TypeScript (2022): Mastered writing robust, strongly-typed code in both React and React Native, improving tooling and scalability.</li>
                    <li>Next.js (2023): Proficient in server-side rendering and static site generation, optimizing web application performance.</li>
                    <li>State Management (2019): Experienced with Context API and Redux for managing complex state in React applications.</li>
                    <li>React Native Navigation (2019): Adept at using React Navigation for seamless mobile app navigation and enhanced user experience.</li>
                    <li>Advanced TypeScript (2023): Expertise in generics, utility types, and type inference, ensuring flexible and reusable code.</li>
                    <li>Next.js Deployment: Capable of deploying Next.js applications using platforms like Vercel for fast, efficient deployment.</li>
                </ul>
            </List>
            <Divider />
            <Description>
              I bring extensive knowledge of virtual design, AI technologies, and marketing, striving to deliver solutions that are both technically advanced and visually appealing.
              <br /><br /> 
              I’m constantly seeking opportunities to further develop my skills and contribute to innovative projects.
            </Description>
            <Divider />
            <Text>Key Projects:</Text>
            <List2>
              <ul>
                <li>Nex AI: AI Newsletter and social media marketing automation.</li>
                <li>Bikera: Developing Digital Systems for Bike Lending.</li>
                <li>Unreal Engine 5 (UE5) & After Effects expertise.</li>
                <li>AI Smartphone App (React Native): Full-stack development with scalable back-end infrastructure.</li>
              </ul>
            </List2>
            <Text>Connect with me:</Text>
            <List3>
              <ul>
                <a href="https://github.com/NexaiGuy" target="_blank"><li>GitHub: Discover my repositories and projects.</li></a>
                <li>For inquiries: blancaflorkevin@gmail.com</li>
              </ul>
            </List3>
        </Bio>  
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  max-width: 1234px;
  height: 1600px;
  margin: 0 auto;
  text-align: center;
  font-family: "SUSE", sans-serif;
  padding-top: 210px;
  padding: 20px;
`

const Title = styled.div`
  font-style: normal;
  font-size: 27px;
  font-weight: bold;
  line-height: 130%;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 20px;
  padding: 10px; /* Add padding to ensure space inside the border */
`

const Bio = styled.div`
  max-width: 960px;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  margin: 0 auto;
  text-align: start;
`

const Name = styled.h1`
  font-size: 33px;
`

const Expertise = styled.div`
  font-size: 21px;
  line-height: 50px;
  padding-bottom: 18px;
`

const Description = styled.div`
  font-size: 18px;
  font-style: italic;
  line-height: 28px;
  padding-bottom: 30px;
`

const Text = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  line-height: 50px;
`

const List = styled.ul`
  font-size: 17px;
  list-style: none; /* Remove default list styling */
  margin: 0;
  padding: 0;
  padding-bottom: 45px;
  display: flex; /* Flexbox layout for horizontal items */
  align-items: center;
  line-height: 36px;


  li {
    position: relative;
    margin-right: 10px; /* Space between items */
    padding-left: 1.2em; /* Space for the bullet */
  }

  li::before {
    content: '●'; /* Custom bullet using a circle character */
    position: absolute;
    left: 0;
    color: white; /* Bullet color */
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
`

const List2 = styled.ul`
  font-size: 17px;
  list-style: none; /* Remove default list styling */
  margin: 0;
  padding: 0;
  padding-bottom: 27px;
  display: flex; /* Flexbox layout for horizontal items */
  align-items: center;
  line-height: 27px;

  li {
    position: relative;
    margin-right: 10px; /* Space between items */
    padding-left: 1.2em; /* Space for the bullet */
  }

  li::before {
    content: '●'; /* Custom bullet using a circle character */
    position: absolute;
    left: 0;
    color: white; /* Bullet color */
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
`

const List3 = styled.ul`
  font-size: 17px;
  list-style: none; /* Remove default list styling */
  margin: 0;
  padding: 0;
  display: flex; /* Flexbox layout for horizontal items */
  align-items: center;
  line-height: 27px;

  li {
    position: relative;
    margin-right: 10px; /* Space between items */
    padding-left: 1.2em; /* Space for the bullet */
  }

  li::before {
    content: '●'; /* Custom bullet using a circle character */
    position: absolute;
    left: 0;
    color: white; /* Bullet color */
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }
`;

const Divider = styled.div`
  width: 270px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 32px auto 60px;
`;