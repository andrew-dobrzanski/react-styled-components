import React from 'react';
import styled from "styled-components";
import { FaBeer, FaCode, FaCog, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Services() {
  return (
    <Section>
        <Container>
            <Link to="/contact">
                <Content>
                    <FaCode />
                    <Title>{'Web Development'}</Title>
                    <Text>{"Whether you need a website or web application built from inception to completion or require assistance with an ongoing project, I'm here to help. My expertise covers a comprehensive spectrum of web development services, catering to diverse needs—be it leveraging various content management systems and open-source software or crafting entirely bespoke, tailored applications from scratch."}</Text>
                </Content>
            </Link>

            <Link to="/contact">
                <Content>
                    <FaCog />
                    <Title>{'Site Maintenance'}</Title>
                    <Text>{"Allow me to handle your website updates promptly and consistently, ensuring your site stays contemporary and operational. I provide ongoing, comprehensive web support, ensuring your online platform remains stable, secure, and continuously accessible. This proactive approach ensures your virtual storefront is always open for business, empowering you to foster a vibrant and engaging online presence."}</Text>
                </Content>
            </Link>

            <Link to="/contact">
                <Content>
                    <FaUsers />
                    <Title>{'Web Consulting'}</Title>
                    <Text>{"Require assistance with your project? I'm equipped to assist in strategizing, designing, and developing your product, whether from inception to completion or at any stage along your web strategy journey. Let's connect! I'm eager to discuss potential projects or address any inquiries you may have. I'm here to lend a hand and provide the support you need."}</Text>
                </Content>
            </Link>
        </Container>
    </Section>
  );
}

export default Services;

const Section = styled.section`
    padding: 40px 0;
    width: 100%;
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 1260px;
    padding: 0 20px;

    @media (min-width: 768px) {
        align-items: center;
        display: flex;
    }
`;
const Content = styled.div`
    padding: 20px;
    text-align: center;

    svg {
        height: 80px;
        width: 80px;
    }
    &:hover {
        background: #fcfcfc;
        box-shadow: 0 0 5px #ddd;
            -webkit-transition: box-shadow 0.2s ease-in-out;
        -moz-transition: box-shadow 0.2s ease-in-out;
        -o-transition: box-shadow 0.2s ease-in-out;
        transition: box-shadow 0.2s ease-in-out;
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
