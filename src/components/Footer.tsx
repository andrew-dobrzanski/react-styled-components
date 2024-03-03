import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
        <Container>
            <ColumnsContainer>
                <Column>
                    <Title>{'Quick Links'}</Title>
                    <Links>
                        <Link>
                            <NavLink to="/">{'Home'}</NavLink>
                        </Link>
                        <Link>
                            <NavLink to="/portfolio">{'Portfolio'}</NavLink>
                        </Link>
                        <Link>
                            <NavLink to="/services">{'Services'}</NavLink>
                        </Link>
                        <Link>
                            <NavLink to="/about">{'About'}</NavLink>
                        </Link>
                        <Link>
                            <NavLink to="/contact">{'Contact'}</NavLink>
                        </Link>
                    </Links>
                </Column>
                        
                <Column>
                    <Title>{'Important Info'}</Title>
                    <SubText>{'Devoted front-end web developer with a focus on UI/UX Design. Possess an unwavering commitment to pixel-perfect detail with a passion for problem-solving.'}</SubText>
                </Column>
                        
                <Column>
                    <Title>{'Contact Info'}</Title>
                    <SubText>{'Portland, Oregon'}<br></br>
                    {'Phone:'} <a href="tel:9712804560">{'971.280.4560'}</a><br></br>
                    {'Email:'} <a href="mailto:dobrzanski.andrew@gmail.com">{'dobrzanski.andrew@gmail.com'}</a>
                    </SubText>
                </Column>
            </ColumnsContainer>
        </Container>
        <CopyrightContainer>
            <ColumnsContainer>
                
                <SocialLinks>
                    <Item>
                        <SocialLink href="https://github.com/andrew-dobrzanski"  target="_blank">
                            <FaGithub />
                        </SocialLink>
                    </Item>
                
                    <Item>
                        <SocialLink href="https://codepen.io/Andrew-Dobrzanski" target="_blank">
                            <FaCodepen />
                        </SocialLink>
                    </Item>
                    <Item>
                        <SocialLink href="http://www.linkedin.com/in/davidandrewdobrzanski"  target="_blank">
                            <FaLinkedin />
                        </SocialLink>
                    </Item>
                </SocialLinks>
                <CopyrightText>&#169;2024 All Rights Reserved.</CopyrightText>
            </ColumnsContainer>
        </CopyrightContainer>
    </>
  );
}

export default Footer;

const Container = styled.div`
    background-color: #272727;
    color: #eee;
    padding: 40px 20px;
    margin: 0 auto;

    @media (min-width: 768px) {
        align-items: center;
        display: flex;
    }
`;
const ColumnsContainer = styled.div`
    margin: 0 auto;
    max-width: 1260px;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;
const Column = styled.div`
    p {
        color: #eee;
        font-size: 14px;
    }
    @media (min-width: 768px) {
        width: 30%;
    }
`;
const Title = styled.h2`
    font-size: 18px;
`;
const Links = styled.ul`
    list-style: none;
    padding-left: 0;
`;
const Link = styled.li`
    border-bottom: 1px solid #333;
    font-size: 14px;
    padding: 5px 0;

    a {
        color: #eee;

        &:hover {
            color: #31b0d5;
        }
    }
`;
const SubText = styled.p`
    a {
        &:hover {
            color: #f3c407;
        }
    }
`;
const CopyrightContainer = styled.div`
    background-color: #272727;
    border-top: 1px solid #333;
    color: #eee;
    padding: 20px;
`;
const CopyrightText = styled.div`
    align-self: center;
    color: #6f6b6b;
    font-size: 12px;
`;
const SocialLinks = styled.ul`
    list-style: none;
    padding: 0;
`;
const Item = styled.li`
    display: inline-block;
    padding: 10px;
`;
const SocialLink = styled.a`
    &:hover {
        color: #f3c407;
    }
`;