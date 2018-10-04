import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../styles/mediaQuery';
import Container from './Container';

const NavWrapper = styled.div`
    position: absolute;
    top : 0;
    left: 0;
    padding: 20px 30px;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    transition: all .4s ease-in;

    &.scroll-wrapper {
        background-color: rgba(255, 255, 255, 1);
        position: fixed;
        box-shadow: 0px 0px 6px -1px #555;
        z-index: 2;
        p {
           color: #555; 
           z-index: 2;
        }
    }
`;

const NavLink = styled.p`
    color: #fff;
    display: inline-block;
    margin-right: 30px;
    font-size: 130%;
    &:last-child {
        margin-right: 0;
    }

    ${media.phablet`
        font-size: 135%;
    `}
    ${media.tablet`
        font-size: 140%;
    `}
    ${media.smallLaptop`
        font-size: 145%;
    `}
    ${media.desktop`
        font-size: 150%;
    `}

    a {
        color: inherit;
        i {
            font-size: 130%;
            vertical-align: middle;
        }
    }
`;

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleScrollNav = this.handleScrollNav.bind(this);
        this.navRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollNav);
    }

    handleScrollNav() {
        const node = this.navRef.current;
        if(window.scrollY >= node.offsetHeight + 250) {
            node.classList.add('scroll-wrapper');
        } else {
            node.classList.remove('scroll-wrapper');
        }
        // console.log(node.offsetHeight);
    }
    render() {
        return (
            <NavWrapper ref={this.navRef}>
                <Container>
                    <NavLink>
                        <Link to={`/`}>
                            Home
                    </Link>
                    </NavLink>

                    <NavLink>
                        <a href="https://github.com/marufMunshi/marvel-heroes" target="_blank">
                            <i className="ion-social-github"></i>
                        </a>
                    </NavLink>
                </Container>
            </NavWrapper>
        );
    }
}

export default Nav;