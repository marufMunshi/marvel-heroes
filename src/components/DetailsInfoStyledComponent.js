import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { media } from '../styles/mediaQuery';


export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    ${media.smallLaptop`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `}
`;

export const HeroDescription = styled.p`
    font-size: 105%;
    color: #fff;
    word-spacing: 3px;
    line-height: 140%;
    margin: 20px 0 40px 0;
    text-align: center;
    font-weight: normal;
    ${media.phablet`
        font-size: 125%;
    `}
    ${media.tablet`
        font-size: 130%;
    `}
    ${media.smallLaptop`
        flex: 1 1 100%;
        line-height: 160%;
    `}
`;


export const HeroPageImage = styled.img`
    width: 130px;
    height: auto;
    border: 3px solid #fff;
    border-radius: 5px;
`;

export const Wrapper = styled(Card)`
    height: 100%;
    color: #555;
    display: flex;
    flex-direction: column;
    transition: box-shadow .5s ease-in;
    &:hover {
        box-shadow: 0 3px 13px -2px #a9a9a9;
    }
`;

export const ComicsHeader = styled.header`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #e5e5e5;
`;


export const ComicImage = styled.img`
    width: 50px;
    height: 75px;
`;

export const ComicTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const ComicTitle = styled.p`
    flex-grow: 1;
    text-align: center;
    padding: 0 0 0 20px;
    font-size: 120%;
`;

export const ComicPublishedDate = styled.p`
    flex-grow: 1;
    text-align: center;
    padding: 10px 0 0 20px;
    font-size: 100%;
`;


export const ComicsFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px
`;

export const OutLinedButton = styled(Button)`
    font-size: 105% !important;
    font-family: ${props => props.theme.normalFont} !important;
    color: #555 !important;
    font-weight: normal !important;
    text-transform: none !important;
    word-spacing: 3px;
`;

export const Description = styled.p`
    padding: 20px;
    flex-grow: 1;
    font-size: 110%;
    word-spacing: 3px;
    border-bottom: 1px solid #e5e5e5;
`;

export const LoadButtonWrapper = styled.div`
    text-align: center;
`;

export const LoadButton = styled(Button)`
    font-size: 110% !important;
    word-spacing: 3px;
    color: #fff !important;
    font-weight: bold !important;
    background-color: #EB974E !important;
    transition: all .4s ease-in;
    text-transform: unset !important;
    &:hover{
        color: #fff !important;
    }
    &:focus {
        color: #fff !important;
    }
`;

// Modal Components

export const ModalWrapper = styled(({...rest}) => <Drawer {...rest} classes={{paper: 'paper-override'}} />)`
  & .paper-override {
    width: 70%;
  }
`

export const ModalHeader = styled.header`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e5e5e5;
`;

export const ModalImage = styled.img`
    width: 100px;
    height: 150px;
`;

export const ModalTitle = styled.h1`
    font-size: 115%;
    word-spacing: 3px;
    font-weight: normal;
    text-align: ${props => props.other ? 'left' : 'center'};
    line-height: 1.6;
    padding-top: ${props => props.other ? '0' : '20px'};
    padding-bottom: ${props => props.other ? '10px' : '0'};
`;

export const ModalDescriptionWrapper = styled.div`
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
`;

export const ModalDescription = styled.p`
    font-size: 105%;
    line-height: 1.5;
    text-align: ${props => props.other ? 'left' : 'center'};
    word-spacing: 3px;
`;

export const ModalCharacterWrapper = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

