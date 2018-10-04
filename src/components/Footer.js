import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/mediaQuery';
import Container from './Container';

const ContainerWrapper = styled.div`
    background-color: #22313F;
`;

const FlexWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    color: #fff;
    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const Text = styled.p`
    word-spacing: 3px;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
    ${media.tablet`
        font-size: 105%;
        margin-bottom: 0;
    `}
    ${media.desktop`
        font-size: 110%;
    `}
    a {
        color: inherit;
        border-bottom: 1px solid #fff;
    }
`;

const Footer = () => {
    return (
        <ContainerWrapper>
            <Container>
                <FlexWrapper>
                    <Text>&copy;2018 <a target="_blank" href="https://www.marvel.com/">Marvel</a> </Text>
                    <Text>Design & Developed by <a target="_blank" href="#">Maruf Hasan</a> </Text>
                </FlexWrapper>
            </Container>
        </ContainerWrapper>
    );
};

export default Footer;