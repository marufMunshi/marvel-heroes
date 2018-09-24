import styled from 'styled-components';
import { media } from '../styles/mediaQuery';


const GlobalWrapper = styled.div`
    background-color: #fff;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: box-shadow .5s ease-in;

    &:hover {
        box-shadow: 0px 2px 10px 0px #acacac;
    }

    ${media.tablet`
        margin-bottom: 40px;
    `}
    ${media.smallLaptop`
        margin-bottom: 60px;
    `}
`;

export default GlobalWrapper;