import styled from 'styled-components';
import { media } from '../styles/mediaQuery';

const Title = styled.h1`
    color: ${props => props.theme.color};
    font-size: ${props => props.theme.fontSize}%;
    line-height: 145%;
    text-align: center;
    word-spacing: 3px;
    padding-bottom: ${props => props.theme.paddingBottom ? props.theme.paddingBottom : 0}px;
    ${media.phablet`
        font-size: ${props => props.theme.fontSize + 5}%;
    `}
    ${media.tablet`
        font-size: ${props => props.theme.fontSize  + 15}%;
        padding-bottom: ${props => props.theme.paddingBottom ? props.theme.paddingBottom + 20 : 0}px;
    `}
    ${media.smallLaptop`
        font-size: ${props => props.theme.fontSize + 25}%;
        padding-bottom: ${props => props.theme.paddingBottom ? props.theme.paddingBottom + 40 : 0}px;
    `}
    ${media.desktop`
        font-size: ${props => props.theme.fontSize + 35}%;
    `}
`;

export default Title;