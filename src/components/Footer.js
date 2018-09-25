import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/mediaQuery';

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100px;
    padding-left: 15px;
    ${media.tablet`
        padding-left: 0;
        flex-direction: row-reverse;
        align-items: center;
    `}
`;

const Text = styled.p`
    font-size: 105%;
    word-spacing: 2px;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Text>&copy;2018 <a target="_blank" href="https://www.marvel.com/">Marvel</a> </Text>
            <Text>Design & Developed by <a target="_blank" href="#">Maruf Hasan</a> </Text>
        </Wrapper>
    );
};

export default Footer;