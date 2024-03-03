import React from 'react';
import styled from "styled-components";
import HeroImg from '../images/hero.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <HeroSection>
        <Container className="container">
            <Title><span>{'Senior'}</span><br></br><span>{'Web Developer'}</span></Title>
            <SubTitle>{'Discover. Design. Develop.'}</SubTitle>
                <Link to="/contact">
                    <LinkText className="btn-custom btn-3 icon-arrow-right">{'Contact Me'}</LinkText>
                </Link>
        </Container>
    </HeroSection>
  );
}

export default Hero;

const HeroSection = styled.section`
    align-items: center;
    background: #333 url('${HeroImg}') repeat center;
    display: flex;
    justify-content: center;
    min-height: 400px;
    width: 100%;
`;
const Container = styled.div`
    // max-width: 1150px;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 36px;
    line-height: 1.4;
    text-align: left;
    text-transform: uppercase;

    span {
        background-color: rgba(46, 98, 0, 0.8);
        opacity: .95;
        padding: 0 10px;

        @media (min-width: 768px) {
            font-size: 60px;
        }
    }
`;
const SubTitle = styled.p`
    background-color: #101010;
    color: #fff;
    font-size: 20px;
    opacity: .8;
    max-width: 250px;
    padding: 2px 10px;
    font-style: italic;
`;
const LinkText = styled.button`
`;