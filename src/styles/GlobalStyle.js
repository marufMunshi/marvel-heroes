import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const Style = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    @import url('https://fonts.googleapis.com/css?family=PT+Serif:400,400i');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100%;
        position: relative;
        font-family: ${props => props.theme.normalFont};
        background: ${props => props.theme.globalBackgroundColor};
        font-size: 16px;
        color: ${props => props.theme.highWeightFontColor};
    }

    a {
        color: ${props => props.theme.linkColor};
        text-decoration: none;
        &:hover {
            text-decoration: none;
            color: ${props => props.theme.linkColor};
            cursor: pointer;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-family: ${props => props.theme.titleFont};
    }

    ul, ol {
        list-style: none;
    }
`;

//using theme provider to pass theme
// special children prop to pass children elements directly 

export const GlobalStyle = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Style />
                {props.children}
            </div>
        </ThemeProvider>
    );
};