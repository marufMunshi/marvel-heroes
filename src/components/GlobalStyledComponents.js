import styled from 'styled-components';
import { media } from '../styles/mediaQuery';
import Card from '@material-ui/core/Card';


export const GlobalSection = styled.section`
    padding-bottom: 40px;
    min-height: 60vh;
`;

export const GlobalWrapper = styled(Card)`
    background-color: #ECF0F1 !important;
    height: auto;
    max-width: 345px;
    cursor: pointer;
    transition: box-shadow .5s ease-in;

    &:hover {
        box-shadow: 0 3px 13px -2px #a9a9a9;
    }

    ${media.tablet`
        margin-bottom: 40px;
    `}
    ${media.smallLaptop`
        margin-bottom: 60px;
    `}
`;


export const Title = styled.h1`
    color: ${props => props.heroName ? '#fff' : '#555'};
    font-size: ${props => props.heroName ? '2rem' : '1.5rem'};
    font-weight: normal;
    line-height: 145%;
    text-align: center;
    word-spacing: 3px;
    padding: ${props => props.heroName ? '8px 0 0 0' : '30px 0'};
    border-bottom: ${props => props.heroName ? '1px solid #fafafa' : '0'};
    ${media.phablet`
        font-size: 1.7rem;
    `}
    ${media.tablet`
        font-size: 1.9rem;
    `}
    ${media.smallLaptop`
        font-size: 2.1rem;
        padding: 40px 0;
    `}

    ${media.laptop`
        font-size: 2.3rem;
        padding: 50px 0;
    `}

    ${media.desktop`
        font-size: 2.5rem;
        padding: 60px 0;
    `}

    &::after {
        display: block;
        content: '';
        border-bottom: 2px solid rgba(34, 49, 63, 0.75);
        margin: 0 auto;
        width: ${props => props.heroName ? '0' : '80px'};
        padding-top: 3px;
    }
`;

export const HeroTitle = styled.h1`
    color: rgba(255, 255, 255, 1);
    font-size: 1.9rem;
    font-weight: normal;
    line-height: 145%;
    text-align: center;
    word-spacing: 3px;
    z-index: 2;
    margin-top: 90px;
    ${media.phablet`
        font-size: 2.1rem;
    `}
    ${media.tablet`
        font-size: 2.3rem;
        margin: 0;
        padding: 6.5px 0;
    `}
    ${media.smallLaptop`
        font-size: 2.5rem;
    `}

    ${media.laptop`
        font-size: 2.7rem;
        padding: 2.5px 0;
    `}

    ${media.desktop`
        font-size: 3rem;
    `}
`;