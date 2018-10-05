import React from 'react';
import Container from './Container';
import { HeaderWrapper, HeroDescription, HeroPageImage } from './DetailsInfoStyledComponent';
import { Title } from './GlobalStyledComponents';



const HeroPageHeaderInfo = ({ heroData }) => {
    return (
        <Container>
            <HeaderWrapper>
                <HeroPageImage
                    src={`${heroData.thumbnail.path}/portrait_uncanny.${heroData.thumbnail.extension}`.replace(/http/g, 'https')}
                    alt={heroData.name}
                />
                <Title heroName>
                    {heroData.name}
                </Title>
                {
                    heroData.description
                    ?
                    <HeroDescription>
                        {heroData.description}
                    </HeroDescription>
                    :
                    <HeroDescription>
                        Description for {heroData.name} is not available at this moment.
                    </HeroDescription>
                }
            </HeaderWrapper>
        </Container>
    );
};

export default HeroPageHeaderInfo;