import * as React from "react";
import styled from "styled-components";

export default function BioSection() {
  return (
    <Wrapper id="Bio">
      <div>
        <Title>BIO</Title>
        <BioContent>
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
        </BioContent>  
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  max-width: 1234px;
  width: 100%;
  height: 1800px;
  margin: 0 auto;
  text-align: center;
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  padding-top: 210px;
  padding: 100px 20px;

  @media (max-width: 1024px) {
    height: auto;
    padding: 80px 15px;
  }

  @media (max-width: 768px) {
    padding: 60px 10px;
  }

  @media (max-width: 480px) {
    padding: 40px 5px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-size: 27px;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 14px;
  padding: 0 36px;
  max-width: 18%;
  line-height: 130%;
  text-transform: uppercase;
  color: #3FB1F4;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.9);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  background: linear-gradient(370deg, rgba(187, 86, 112, 0.5), rgba(71, 28, 171, 0.5), rgba(63,176,244, 0.5));
  
  transition: transform 0.6s ease; /* Smooth transition for the hover effect */
  transform-style: preserve-3d; /* Preserve 3D transformation on hover */

  &:hover {
    transform: rotateY(360deg);
    transition: transform 0.5s ease-in-out; /* Smooth animation */
    transform-style: preserve-3d; /* Preserve 3D effect */
    perspective: 1000px; /* Create perspective for 3D effect */
    opacity: 81%;
    transition: 1s;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    max-width: 30%;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    max-width: 50%;
  }
`;

const BioContent = styled.div`
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  margin: 0 auto;
  text-align: start;
  padding: 240px;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  background: linear-gradient(460deg, rgba(187, 86, 112, 1), rgba(63,176,244, 0.7), rgba(71, 28, 171, 1), rgba(63,176,244, 1),rgba(187, 86, 112, 0.7));

  @media (max-width: 1024px) {
    padding: 120px;
  }

  @media (max-width: 768px) {
    padding: 80px;
  }

  @media (max-width: 480px) {
    padding: 40px;
  }
`;

const Name = styled.h1`
  font-size: 33px;
  font-weight: 600;
  padding-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Expertise = styled.div`
  font-size: 21px;
  line-height: 50px;
  padding-bottom: 18px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

const Description = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 1000;
  line-height: 28px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-style: italic;
  font-weight: 800;
  line-height: 50px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 40px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

const List = styled.ul`
  font-family: "Open Sans", sans-serif;
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

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 32px;
  }
`;

const List2 = styled.ul`
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: 800;
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const List3 = styled.ul`
  font-family: "Open Sans", sans-serif;
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

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Divider = styled.div`
  width: 270px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 32px auto 60px;

  @media (max-width: 768px) {
    margin: 32px auto 40px;
  }

  @media (max-width: 480px) {
    margin: 32px auto 30px;
  }
`;
