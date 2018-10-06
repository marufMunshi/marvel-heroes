import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Title } from './GlobalStyledComponents';
import { LoadingIcon, IconWrapper } from './LoadingIcon';
import { LoadButton, LoadButtonWrapper } from './DetailsInfoStyledComponent';
import ComicList from './ComicList';
import ComicInfoModal from './ComicInfoModal';
import marvelApiCall from '../api/marvelApi';
import { addComic } from '../actions/fetchedHeroComicsList';
import Container from './Container';


class HeroDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            comicInfo: {},
            loading: false,
            numberOfComics: this.props.heroData.comics.available,
            allComicsLoaded: false
        }
        this._isMounted = true;
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    componentDidMount() {
        if(this._isMounted) {
            let collectionURI = this.props.heroData.comics.collectionURI.replace(/http/g, 'https');
            this.getData(collectionURI, 6);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async getData(url, limit, offset=20) {
        let data = await marvelApiCall(`${url}`, limit, offset);
        this.props.addComic(
            this.props.id,
            data.results
        );
        if(this._isMounted) {
            this.setState(() => {
                return {
                    loading: false
                }
            });
        }
    }

    handleLoadMore() {
        if(this._isMounted) {
            this.setState(() => {
                return {
                    loading: true
                }
            });
            let collectionURI = this.props.heroData.comics.collectionURI.replace(/http/g, 'https');
            // Number of saved comics plus offset
            let numberOfData = this.props.comics.data.length + 20;
            if (numberOfData <= this.state.numberOfComics) {
                this.getData(collectionURI, 6, numberOfData);
            } else {
                this.setState(() => {
                    return {
                        allComicsLoaded: true
                    }
                });
            }
        }
    }

    handleReadMore(e) {
        let id = e.currentTarget.dataset.id;
        let comicInfo = this.props.comics.data.find((item) => item.id == id);
        this.setState((prevState) => {
            return {
                modal: !prevState.modal,
                comicInfo: { ...comicInfo }
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.modal &&
                    <ComicInfoModal modal={this.state.modal} handleReadMore={this.handleReadMore} comicInfo={this.state.comicInfo} />
                }
                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Title>
                            Comics ({this.props.heroData.comics.available})
                        </Title>
                    </Grid>
                    {
                        this.props.comics === undefined
                            ?
                            <IconWrapper>
                                <LoadingIcon
                                    className="ion-ios-loop"
                                    theme={{ color: '#555' }}
                                >
                                </LoadingIcon>
                            </IconWrapper>
                            :
                            <ComicList data={this.props.comics.data} handleReadMore={this.handleReadMore}/>
                    }

                    {
                        this.state.allComicsLoaded
                            ?
                            <IconWrapper>
                                <Title theme={{ fontSize: 160, color: 'purple' }}>
                                    All Comics are Loaded
                                    </Title>
                            </IconWrapper>
                            :
                            this.state.loading
                            &&
                            <IconWrapper>
                                <LoadingIcon
                                    className="ion-ios-loop"
                                    theme={{ color: '#555' }}
                                >
                                </LoadingIcon>
                            </IconWrapper>
                    }

                    <Grid
                        container
                        spacing={40}
                    >
                        <Grid item xs={12}>
                            <LoadButtonWrapper>
                                <LoadButton
                                    variant="contained"
                                    onClick={this.handleLoadMore}
                                    disabled={this.state.allComicsLoaded ? true : false}
                                >
                                    Load More
                                </LoadButton>
                            </LoadButtonWrapper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        comics: state.fetchedHeroComics.find((comic) => {
            return comic.id == props.id
        })
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComic: (id, data) => dispatch(addComic(id, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails);