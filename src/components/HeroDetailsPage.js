import React from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import HeroPageHeaderInfo from './HeroPageHeaderInfo';
import HeroDetailsInfo from './HeroDetailsInfo';
import Footer from './Footer';
import { LoadingIcon, IconWrapper } from './LoadingIcon';
import marvelApiCall from '../api/marvelApi';
import { addHero } from '../actions/fetchedHeroList';
import { GlobalSection } from './GlobalStyledComponents';

class HeroDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this._isMounted = true;
    }

    componentDidMount() {
        if(this._isMounted) {
            this.getData();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.getData();
        }
    }

    async getData() {
        let id = this.props.match.params.id;
        let data = await marvelApiCall(`https://gateway.marvel.com/v1/public/characters/${id}`);
        // console.log(data);
        await this.props.addHero(data.results);
    }

    render() {
        const heroData = this.props.heroData;
        return (
            <div>
                <Header>
                    {
                        heroData === undefined
                            ?
                            <IconWrapper>
                                <LoadingIcon className="ion-ios-loop" theme={{ color: '#fff' }}></LoadingIcon>
                            </IconWrapper>
                            :
                            <HeroPageHeaderInfo heroData={heroData} />
                    }
                </Header>

                <GlobalSection>
                    {
                        heroData &&
                        <HeroDetailsInfo heroData={heroData} id={this.props.match.params.id} />
                    }
                </GlobalSection>
                <Footer />
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