import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import HeaderInfo from './HeroPageHeaderInfo';
import HeroDetailsInfo from './HeroDetailsInfo';
import Footer from './Footer';
import { LoadingIcon } from './LoadingIcon';
import marvelApiCall from '../api/marvelApi';
import { addHero } from '../actions/fetchedHeroList';
import { Nav, NavLink } from './Nav';

class HeroDetailsPage extends React.Component {

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.getData();
        }
    }

    async getData() {
        let id = this.props.match.params.id;
        let data = await marvelApiCall(`https://gateway.marvel.com/v1/public/characters/${id}`);
        await this.props.addHero(data.results);
    }

    render() {
        const heroData = this.props.heroData;
        return (
            <div>
                <Header>
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
                    {
                        heroData === undefined
                            ?
                            <LoadingIcon className="ion-ios-loop" theme={{ color: '#fff' }}></LoadingIcon>
                            :
                            <HeaderInfo heroData={heroData} />
                    }
                </Header>

                {
                    heroData &&
                    <HeroDetailsInfo heroData={heroData} id={this.props.match.params.id} />
                }
                <Grid>
                    <Footer />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        heroData: state.fetchedHeroList.find((hero) => {
            return hero.id == props.match.params.id
        })
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addHero: (data) => dispatch(addHero(...data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetailsPage);