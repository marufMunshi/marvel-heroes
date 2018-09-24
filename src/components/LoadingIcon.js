import styled, { keyframes }from 'styled-components';
import { media } from '../styles/mediaQuery';

const roll = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const IconWrapper = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoadingIcon = styled.i`
    font-size: 100px;
    color: ${props => props.theme.color};
    animation: ${roll} 2s infinite;
    transform: rotate(30deg);
    text-align: center;

    ${media.phablet`
        font-size: 105px;
    `}
    ${media.tablet`
        font-size: 110px;
    `}
    ${media.smallLaptop`
        font-size: 120px;
    `}
    ${media.desktop`
        font-size: 130px;
    `}
`;

export { LoadingIcon, IconWrapper };