import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';
import { media } from '../styles/mediaQuery';


export const HeroImage = styled(CardMedia)`
    width: 100%;
    height: 140px;
`;

export const HeroName = styled.p`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 110%;
    height: 90px;
    font-weight: bold;
    color: #555555;
    word-spacing: 3px;
    ${media.phablet`
        font-size: 115%;
    `}
    ${media.tablet`
        font-size: 120%;
    `}
    ${media.smallLaptop`
        font-size: 125%;
    `}
    ${media.desktop`
        font-size: 135%;
    `}
`;