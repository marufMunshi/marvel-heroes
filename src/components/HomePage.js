import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Title from './Title';
import PopularHeroes from './PopularHeroes';
import Footer from './Footer';
import { Nav, NavLink } from './Nav';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header homePage>
                    <Nav>
                        <NavLink>
                            <Link to={`/`}>
                                Home
                            </Link>
                        </NavLink>

                        <NavLink>
                            <a href="" target="_blank">
                                Github
                            </a>
                        </NavLink>
                    </Nav>
                    <Title theme={{ fontSize: 190, color: 'rgba(255, 255, 255, 0.8)' }}>
                        Welcome to Marvel Universe
                    </Title>
                </Header>
                <PopularHeroes />
                <Footer />
            </div>
        );
    }
}

  
export default HomePage;