import React from 'react';
import { Grid } from 'react-bootstrap';
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
    margin: 20px 0 40px 0;
    text-align: justify;
    ${media.phablet`
        font-size: 125%;
    `}
    ${media.tablet`
        font-size: 130%;
    `}
    ${media.smallLaptop`
        flex: 1 1 100%;
        line-height: 160%;
    `}
`;

const HeroPageHeaderInfo = ({ heroData }) => {
    return (
        <Grid>
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
        </Grid>
    );
};

export default HeroPageHeaderInfo;