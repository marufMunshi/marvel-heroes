import React from 'react';
import styled from 'styled-components';
import homeBgImage from '../images/civil-war.jpg';
import otherBgImage from '../images/secondBg.jpg';
import Nav from './Nav';

const StyledHeader = styled.header`
    background-image: ${props => props.homePage ? 
        `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(${homeBgImage})` 
        : 
        `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url(${otherBgImage})`  
    };
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 60vh;
    position: relative;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                this.props.homePage 
                    ? 
                <StyledHeader homePage>
                    <Nav />
                    {this.props.children}
                </StyledHeader> 
                : 
                <StyledHeader>
                    <Nav />
                    {this.props.children}
                </StyledHeader> 
        );
    }
}

export default Header;