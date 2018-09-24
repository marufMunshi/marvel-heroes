import styled from 'styled-components';
import homeBgImage from '../images/civil-war.jpg';

export const Header = styled.header`
    background-image: ${props => props.homePage ? 
        `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${homeBgImage})` 
        : 
        `linear-gradient(#5f1f17,#5b3d3d)` 
    };
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
`;

export default Header;