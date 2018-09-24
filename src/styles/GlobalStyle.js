import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from './theme';

const Style = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    @import url('https://fonts.googleapis.com/css?family=PT+Serif:400,400i');

    * {
        box-sizing: border-box;
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        font-family: ${props => props.theme.normalFont};
        background: ${props => props.theme.globalBackgroundColor};
        font-size: 16px;
        color: ${props => props.theme.highWeightFontColor};
    }

    a {
        color: ${props => props.theme.linkColor};
        &:hover {
            text-decoration: none;
            color: ${props => props.theme.linkColor};
            cursor: pointer;
        }
    }

    address, p, figure, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.titleFont};
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
`;

export const GlobalStyle = () => {
    return (
        <ThemeProvider theme={theme}>
            <Style />
        </ThemeProvider>
    );
};