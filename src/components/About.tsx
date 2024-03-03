import React from 'react';
import styled from "styled-components";
import Headshot from '../images/headshot.jpeg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Section id="about">
        <Container>
            <Portrait className="col-sm-6 col-xs-12">
                <Image src={Headshot} alt="Andrew Dobrzanski portrait" />
            </Portrait>
            <Content className="col-sm-6 col-xs-12">
                <Text>{'My name is'} <strong>{'David Andrew Dobrzanski'}</strong> {'and I am a passionate'} <strong>Front-end Web Developer</strong> {'specializing in'} <strong>UI/UX Design</strong>. {'I have extensive knowledge in'} <strong>web development</strong>, <strong>web design</strong>, and <strong>graphic design</strong> {'with high proficiency in'} <strong>front-end web development</strong>, <strong>user-centered (UI) design</strong>, various <strong>Content Management Systems</strong>, and <strong>SEO concepts</strong> {'among other things. I have pixel perfect attention to detail with a hunger for problem solving and constantly perfecting my craft.'}
                </Text>
                <Text>{'Browse around my site, take a look at my portfolio, get inspired, and please don’t hesitate to contact me if you have any questions.'}
                </Text>
                
                <div className="custom-btn-1 left">
                    <Link to="/contact" data-title="Message Me" className="cust-btn-1">{"Let's Chat"}</Link>
                    {/* <a href="/contact" data-title="Message Me" className="cust-btn-1">{"Let's Chat"}</a> */}
                </div>
            </Content>
        </Container>
    </Section>
  );
}

export default About;

const Section = styled.section`
    padding: 40px 0;
`;
const Headline = styled.div``;
const Container = styled.div`
    margin: 0 auto;
    max-width: 1260px;
    padding: 0 20px;
    @media (min-width: 768px) {
        align-items: center;
        display: flex;
    }
`;
const Portrait = styled.div`
    text-align: center;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`;
const Image = styled.img`
    max-width: 500px;
    width: 100%;
`;
const Content = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
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
