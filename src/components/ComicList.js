import React from 'react';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import 
    { 
        Wrapper, ComicsHeader, ComicImage, ComicTitle, 
        ComicsFooter, OutLinedButton, Description, ComicTitleWrapper,
        ComicPublishedDate
     }
from './DetailsInfoStyledComponent';


class ComicList extends React.Component {

    constructor(props) {
        super(props);
    }

    shorterText(str, limit) {
        let strWithOutHtml = str.replace(/(<([^>]+)>)/ig, "");
        return `${strWithOutHtml.substring(0, limit)} ...`;
    }

    render() {
        return (
            <Grid
                container
                spacing={40}
            >
                {
                    this.props.data.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Wrapper>
                                    <ComicsHeader>
                                        <ComicImage
                                            src={`${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`.replace(/http/g, 'https')}
                                            alt={item.title}
                                        />
                                        <ComicTitleWrapper>
                                            <ComicTitle>{this.shorterText(item.title, 19)}</ComicTitle>
                                            <ComicPublishedDate>{item.dates ? moment(item.dates[0].date).format("Do MMM, YYYY") : 'Date Unknown'}</ComicPublishedDate>
                                        </ComicTitleWrapper>
                                    </ComicsHeader>
                                    <Description>
                                        {item.description && this.shorterText(item.description, 100)}
                                    </Description>
                                    <ComicsFooter>
                                        <OutLinedButton variant="outlined" onClick={this.props.handleReadMore} data-id={`${item.id}`}>
                                            Read More
                                        </OutLinedButton>
                                    </ComicsFooter>
                                </Wrapper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    }

}

export default ComicList;