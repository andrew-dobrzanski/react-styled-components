import React from 'react';
import styled from "styled-components";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import About from '../components/About';

function HomePage() {
  return (
    <div>
      <Hero />
      <Banner />
      <Services />
      <Headline className="welcome-headline">
            <Title>{'About Me'}</Title>
        </Headline>
      <About />
    </div>
  );
}

export default HomePage;

const Headline = styled.div``;
const Title = styled.h2`
    color: #333;
    display: block;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 30px;
    font-weight: normal;
    line-height: 35px;
    margin-bottom: 12px;
`;
