import styled from 'styled-components';
import { media } from '../styles/mediaQuery';

const HeroPageImage = styled.img`
    width: 200px;
    height: auto;
    border: 10px solid #fff;
    border-radius: 10px;
    margin: 50px 0 20px 0;
    ${media.smallLaptop`
        margin-right: 25px;
        width: 250px;
    `}
`;

export default HeroPageImage;