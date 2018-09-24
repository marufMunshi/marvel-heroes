import styled from 'styled-components';
import { media } from '../styles/mediaQuery';


const GlobalSection = styled.section`
    background-color: #ECF0F1;
    padding: 60px 0 40px 0;
    min-height: 40vh;
    ${media.tablet`
       padding-top: 80px;
    `}
    ${media.smallLaptop`
        padding-top: 100px;
    `}

    a {
        color: #333;
    }
`;

export default GlobalSection;