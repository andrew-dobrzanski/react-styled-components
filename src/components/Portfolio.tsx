import React, { useState } from 'react';
import styled from "styled-components";
import PortfolioIMG0 from '../images/portfolio/portfolio-dare-northward.png';
import PortfolioIMG1 from '../images/portfolio/portfolio-city-of-hillsboro.png';
import PortfolioIMG2 from '../images/portfolio/portfolio-simplex-aerospace.png';
import PortfolioIMG3 from '../images/portfolio/portfolio-bronzecraftmemorials.png';
import PortfolioIMG4 from '../images/portfolio/portfolio-myraspberrypiandi.png';
import PortfolioIMG5 from '../images/portfolio/portfolio-bacon.png';
import PortfolioIMG6 from '../images/portfolio/portfolio-dreamland.png';
import PortfolioIMG7 from '../images/portfolio/portfolio-maxwoods.png';
import PortfolioIMG8 from '../images/portfolio/portfolio-allout-skateboarding.png';
import PortfolioIMG9 from '../images/portfolio/portfolio-surf-spot.png';
import PortfolioIMG10 from '../images/portfolio/portfolio-tablet-design.png';
import PortfolioIMG11 from '../images/portfolio/portfolio-contactForms.png';
import PortfolioIMG12 from '../images/portfolio/portfolio-ad-business-card.png';
import PortfolioIMG13 from '../images/portfolio/portfolio-everwood-logo.png';
import PortfolioIMG14 from '../images/portfolio/portfolio-ad-logo.png';
import PortfolioIMG15 from '../images/portfolio/portfolio-mouse-theory.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Portfolio() {
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        PortfolioIMG0,
        PortfolioIMG1,
        PortfolioIMG2,
        PortfolioIMG3,
        PortfolioIMG4,
        PortfolioIMG15,
        PortfolioIMG5,
        PortfolioIMG6,
        PortfolioIMG7,
        PortfolioIMG8,
        PortfolioIMG9,
        PortfolioIMG10,
        PortfolioIMG11,
        PortfolioIMG12,
        PortfolioIMG13,
        PortfolioIMG14,
    ];

    const titles = [
        'Dare Northward',
        'South Hillsboro',
        'Simplex Aerospace',
        'Bronzecraft Memorials',
        'My Raspberry Pi & I',
        'Mouse Theory',
        'Bacon Skateboards',
        'Dreamland Skateparks',
        'MaxWood Floors',
        'All-out Skateboarding',
        'The Surf Spot',
        'Mobile & Tablet Design',
        'Contact Forms',
        'Business Cards',
        'Everwood Watch Co.',
        'AD Logo',
    ];

    const service = [
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design & Development',
        'Web Design',
        'Web Design',
        'Graphic Design',
        'Graphic Design',
        'Graphic Design',
    ];

    const url = [
        '',
        '',
        '',
        'https://www.bronzecraftmemorials.com/',
        '',
        '',
        'https://www.baconskateboards.com/',
        'https://www.dreamlandskateparks.com/',
        '',
        'https://www.alloutskate.com/',
        '',
        '',
        '',
        '',
        'https://everwoodwatchco.com/',
        'http://adobrzanski.com/',
    ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };
      
  return (
      <Section>
		<Container>
            {images.map((image, index) => (
                <Figure>
                    <Link>
                        <Project>
                            <ProjectImage
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                onClick={() => openLightbox(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        </Project>
                        <Caption>
                            <CaptionTitle>{titles[index]}</CaptionTitle>
                            <CaptionText>{service[index]}</CaptionText>
                            {url[index] && ( // Check if url[index] is not empty
                                <Url href={url[index]} target="_blank">Visit Site</Url>
                            )}
                        </Caption>
                    </Link>
                </Figure>
            ))}

            {lightboxIsOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
		</Container>
	</Section>
  );
}

export default Portfolio;

const Section = styled.section`
    padding: 40px 0;
    width: 100%;
`;
const Container = styled.div`
    margin: 0 auto;
    max-width: 1260px;

    @media (min-width: 768px) {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    }
`;
const Figure = styled.figure`
    margin: 10px;
    position: relative;
    &:hover {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
        transition: transform .35s;

        figcaption {
            display: block;
            transition: transform .35s;
        }
    }

    @media (min-width: 768px) {
        width: 45%;
    }

    @media (min-width: 1200px) {
        width: 23%;
    }

    &:nth-child(1) {
        background-color: #73a0f3;
    }
    &:nth-child(2) {
        background-color: #f3c407;
    }
    &:nth-child(3) {
        background-color: #bbb;
    }
    &:nth-child(4) {
        background-color: #ff7f00;
    }
    &:nth-child(5) {
        background-color: #d4edf2;
    }
    &:nth-child(6) {
        background-color: #a8e05d;
    }
    &:nth-child(7) {
        background-color: #f64343;
    }
    &:nth-child(8) {
        background-color: #eaa526;
    }
    &:nth-child(9) {
        background-color: #634f3c;
    }
    &:nth-child(10) {
        background-color: #5a5a5a;
    }
    &:nth-child(11) {
        background-color: #1c1a1a;
    }
    &:nth-child(12) {
        background-color: #1397be;
    }
    &:nth-child(13) {
        background-color: #e1d83c;
    }
    &:nth-child(14) {
        background-color: #a0805c;
    }
    &:nth-child(15) {
        background-color: #55b9fa;
    }
    &:nth-child(16) {
        background-color: #9e9e9e;
    }
`;
const Link = styled.a``;
const Project = styled.div`
    padding: 40px 0;
    position: relative;
`;
const ProjectTitle = styled.h4`
    text-align: center;
`;
const ProjectImage = styled.img`
    width: 100%;
`;
const Caption = styled.figcaption`
    background-color: #333;
    bottom: 0;
    color: #fff;
    display: none;
    text-align: center;
    padding: 10px 0;
    position: absolute;
    width: 100%;
`;
const CaptionTitle = styled.h4`
    margin: 5px auto;
`;
const CaptionText = styled.p`
    color: #31b0d5;
    font-style: italic;
    font-size: 14px;
    margin: 0 auto;
`;
const Url = styled.a`
    color: #fff;
    display: block;
    font-size: 12px;
    margin-top: 5px;

    &:hover {
        color: #f3c407;
    }
`;
