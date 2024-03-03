import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Banner() {
  return (
    <Section>
        <Container>
            <Content>
                <Title>{'View My Portfolio'}</Title>
                <Text>{"Check out some of the websites I have worked on. From custom-built sites to some of the most popular content management systems. Browse around, get inspired, and please don't hesitate to contact me with any questions."}</Text>
            </Content>
            <ButtonContainer>
                <Link to="/portfolio">{'View Portfolio'}</Link>
            </ButtonContainer>
        </Container>
    </Section>
  );
}

export default Banner;

const Section = styled.section`
    background-color: #f5f5f5;
    border-bottom: solid 1px #eee;
    padding: 10px 0 30px;
    width: 100%;
`;
const Container = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1170px;
    padding: 0 20px;
`;
const Content = styled.div`
    @media (min-width: 768px) {
        width: 75%;
    }
`;
const Title = styled.h2`
    color: #333;
    display: block;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 30px;
    font-weight: normal;
    line-height: 35px;
    margin-bottom: 12px;
`;
const Text = styled.p``;
const ButtonContainer = styled.div`
    a {
        background-color: #31b0d5;
        border: none;
        color: #fff;
        font-weight: 700;
        float: right;
        padding: 20px;
        text-align: center;
        text-transform: uppercase;

        &:hover {
            background: #fcad26;
        }
    }
`;
