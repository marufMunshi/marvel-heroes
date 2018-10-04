import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
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
    font-size: 115%;
    color: #fff;
    word-spacing: 3px;
    line-height: 140%;
    margin: 20px 0 40px 0;
    text-align: justify;
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
    width: 150px;
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

export const ReadMore = styled(Button)`
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

export const LoadButton = styled.button`
    text-align: center;
    font-size: 120%;
    word-spacing: 3px;
    color: #fff;
    font-weight: bold;
    background-color: ${props => props.theme.backgroundColor};
    transition: all .4s ease-in;
    &:hover{
        color: #fff;
        box-shadow: 0px 5px 12px -2px #898989;
    }
    &:focus {
        color: #fff;
        outline: none;
        box-shadow: 0px 2px 6px -2px #898989;
    }
`;

export const ModalHeaderWrapper = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalDescription = styled.p`
    font-size: 120%;
    line-height: 145%;
    text-align: justify;
    word-spacing: 3px;
    margin-top: 10px;
`;

export const ModalCharacterWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #555;
    &:last-child {
        border-bottom: 0;
    }
`;

export const ModalBody = styled.div`
    max-height: calc(100vh - 212px);
    overflow-y: auto;
`;
