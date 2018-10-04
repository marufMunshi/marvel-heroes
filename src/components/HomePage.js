import React from 'react';
import Header from './Header';
import { HeroTitle } from './GlobalStyledComponents';
import PopularHeroes from './PopularHeroes';
import Footer from './Footer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header homePage = {true}>
                    <HeroTitle>
                        Marvel Heroes
                    </HeroTitle>
                </Header>
                <PopularHeroes />
                <Footer />
            </div>
        );
    }
}

  
export default HomePage;