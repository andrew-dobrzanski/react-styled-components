import React from 'react';
import styled from "styled-components";
import { FaMap, FaEnvelope, FaPhone } from "react-icons/fa";

function ContactPage() {
  return (
    <Section>
        <Container>
          <InfoItem>
            <Icon>
              <FaMap />
            </Icon>
            <Content>
              <Title>{'Location'}</Title>
              <Text>{'Portland, Oregon'}</Text>
            </Content>
          </InfoItem>

          <InfoItem>
            <Icon>
              <FaEnvelope />
            </Icon>
            <Content>
              <Title>{'Email'}</Title>
              <Text>{'Question not answered yet? Send me a message!'}</Text>
            </Content>
            <Button href="mailto:dobrzanski.andrew@gmail.com">{'Send me a Message'}</Button>
          </InfoItem>

          <InfoItem>
            <Icon>
              <FaPhone />
            </Icon>
            <Content>
              <Title>{'Phone'}</Title>
              <Text>{"Have a question you would like to discuss over a call? Let's chat! I'm more than happy to answer any of your questions."}</Text>
            </Content>
            <Button href="tel:9712804560">{'Chat With Me!'}</Button>
          </InfoItem>
        </Container>
    </Section>
  );
}

export default ContactPage;

const Section = styled.section`
    padding: 40px 0;
    width: 100%;
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;

    svg {
      height: 30px;
      width: 30px;
  }
`;
const InfoItem = styled.div`
  align-items: center;
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    flex-flow: row;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  width: 60px
`;
const Title = styled.h3`
  color: #31b0d5;
  font-weight: 800;
  text-transform: uppercase;
`;
const Text = styled.p``;
const Button = styled.a`
    background-color: #31b0d5;
    border: none;
    color: #fff;
    font-weight: 700;
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    width: 210px;

    &:hover {
        background: #fcad26;
    }
`;
const Content = styled.div`
    text-align: center;
    margin: 0 40px;
    max-width: 350px;

    @media (min-width: 768px) {
      text-align: left;
    }
`;