import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { media } from '../styles/mediaQuery';
import Title from './Title';
import GlobalSection from './GlobalSection';
import GlobalWrapper from './GlobalWrapper';
import { getList } from '../actions/popularHeroList';

const Image = styled.img`
    width: 100%;
    height: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

const Name = styled.p`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 110%;
    height: 80px;
    ${media.phablet`
        font-size: 115%;
    `}
    ${media.tablet`
        font-size: 120%;
    `}
    ${media.smallLaptop`
        font-size: 125%;
    `}
    ${media.desktop`
        font-size: 135%;
    `}
`;

const PopularHeroes = (props) => {
    const { list } = props.getList();
    return (
        <GlobalSection>
            <Title
                theme={{ fontSize: 150, color: '#555', paddingBottom: 20 }}
            >
                Some Popular Heroes
            </Title>
            <Grid>
                <Row>
                    {
                        list.map((item) => {
                            return (
                                <Col
                                    xsOffset={1} xs={10}
                                    smOffset={0} sm={4}
                                    md={3}
                                    key={item.id}
                                >
                                    <Link to={`/hero/${item.id}`}>
                                        <GlobalWrapper>
                                            <Image src={`${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`} alt={item.name} />
                                            <Name>{item.name}</Name>
                                        </GlobalWrapper>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Grid>
        </GlobalSection>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => dispatch(getList())
    }
};

export default connect(undefined, mapDispatchToProps)(PopularHeroes);

