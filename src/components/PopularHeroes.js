import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Container from './Container';
import Grid from '@material-ui/core/Grid';
import { Title, GlobalSection, GlobalWrapper } from './GlobalStyledComponents';
import { HeroImage, HeroName } from './PopularHeroesStyledComponents';
import { getList } from '../actions/popularHeroList';

const PopularHeroes = (props) => {
    const { list } = props.getList();
    return (
        <GlobalSection>
            <Title>
                Popular Heroes
            </Title>
            <Container>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={40}
                >
                {
                        list.map((item) => {
                            return (
                                <Grid item
                                    xs={10}
                                    sm={4}
                                    md={3}
                                    key={item.id}
                                >
                                    <Link to={`/hero/${item.id}`}>
                                        <GlobalWrapper>
                                            <HeroImage 
                                                image={`${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`}
                                                title={item.name}
                                            />
                                            <HeroName>{item.name}</HeroName>
                                        </GlobalWrapper>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </GlobalSection>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => dispatch(getList())
    }
};

export default connect(undefined, mapDispatchToProps)(PopularHeroes);

