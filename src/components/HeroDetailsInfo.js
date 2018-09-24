import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Title from './Title';
import GlobalSection from './GlobalSection';
import { LoadingIcon, IconWrapper } from './LoadingIcon';

import { Wrapper, Image, Name, ReadMore, Description, Button }
    from './DetailsInfoStyledComponent';

import ComicInfoModal from './ComicInfoModal';
import marvelApiCall from '../api/marvelApi';
import { addComic } from '../actions/fetchedHeroComicsList';


class HeroDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            comicInfo: {}
        }
        this.handleLoadMore = this.handleLoadMore.bind(this);
        this.handleReadMore = this.handleReadMore.bind(this);
    }

    componentDidMount() {
        let collectionURI = this.props.heroData.comics.collectionURI;
        this.getData(collectionURI, 0, 6);
    }

    async getData(url, offset, limit) {
        let data = await marvelApiCall(`${url}`, offset, limit);
        await this.props.addComic(
            this.props.id,
            data.results
        );
    }

    handleLoadMore() {
        let collectionURI = this.props.heroData.comics.collectionURI;
        let numberOfData = this.props.comics.data.length;
        this.getData(collectionURI, numberOfData, 6);
    }

    handleReadMore(e) {
        let id;

        if (e === undefined) {
            id = undefined;
        } else {
            id = e.target.dataset.id;
        }

        if (id === undefined) {
            this.setState((prevState) => {
                return {
                    modal: !prevState.modal
                }
            });
        } else {
            let comicInfo = this.props.comics.data.find((item) => item.id == id);
            this.setState((prevState) => {
                return {
                    modal: !prevState.modal,
                    comicInfo: { ...comicInfo }
                }
            });
        }
    }

    render() {
        return (
            <GlobalSection>
                {
                    this.state.modal &&
                    <ComicInfoModal show={this.state.modal} handleReadMore={this.handleReadMore} comicInfo={this.state.comicInfo} />
                }
                <Grid>
                    <Row>
                        <Title theme={{ fontSize: 160, color: '#555', paddingBottom: 25 }}>
                            Comics ({this.props.heroData.comics.available})
                        </Title>
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
                                this.props.comics.data.map((item, i) => {
                                    return (
                                        <Col xs={12} sm={6} md={4} key={i}>
                                            <Wrapper>
                                                <Image
                                                    src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`.replace(/http/g, 'https')}
                                                    alt={item.title}>
                                                </Image>
                                                <Name>{item.title}</Name>
                                                <Description>
                                                    {item.description && item.description.replace(/(<([^>]+)>)/ig, "")}
                                                </Description>
                                                <ReadMore onClick={this.handleReadMore} data-id={`${item.id}`}>
                                                    Read More
                                            </ReadMore>
                                            </Wrapper>
                                        </Col>
                                    )
                                })
                        }
                    </Row>

                    <Row>
                        <Col xsOffset={5} xs={6}>
                            <Button
                                className="btn"
                                theme={{ backgroundColor: '#EB974E' }}
                                onClick={this.handleLoadMore}
                            >
                                Load More
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </GlobalSection>
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

