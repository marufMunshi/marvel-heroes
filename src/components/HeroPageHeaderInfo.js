import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/mediaQuery';
import Image from './HeroPageImage';
import Title from './Title';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${media.smallLaptop`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `}
`;

const Description = styled.p`
    font-size: 120%;
    color: #fff;
    word-spacing: 3px;
    line-height: 140%;
    padding: 0 15px;
    margin: 20px 0 40px 0;
    text-align: justify;
    ${media.phablet`
        padding: 0 20px;
        font-size: 125%;
    `}
    ${media.tablet`
        padding: 25px;
        font-size: 130%;
    `}
    ${media.smallLaptop`
        flex: 1 1 100%;
        padding: 0 70px;
        line-height: 160%;
    `}
`;

const HeroPageHeaderInfo = ({ heroData }) => {
    return (
        <Wrapper>
            <Image 
                src={`${heroData.thumbnail.path}/portrait_uncanny.${heroData.thumbnail.extension}`.replace(/http/g, 'https')} 
                alt={heroData.name} 
            />
            <Title theme={{ fontSize: 180, color: '#fff' }}>
                {heroData.name}
            </Title>
            { 
                heroData.description 
                    &&
                <Description>
                    {heroData.description}
                </Description> 
            }
        </Wrapper>
    );
};

export default HeroPageHeaderInfo;