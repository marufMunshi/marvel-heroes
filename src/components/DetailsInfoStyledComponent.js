import styled from 'styled-components';
import { media } from '../styles/mediaQuery';

export const Wrapper = styled.div`
    min-height: 680px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px 0;
    transition: all .5s ease-in;
    &:hover{
        box-shadow: 0px 5px 12px -2px #898989;
    }
`;

export const Image = styled.img`
    width: 200px;
    height: auto;
`;

export const Name = styled.p`
    flex: 1 1 100%;
    text-align: center;
    padding: 10px 10px;
    font-size: 150%;
    border-bottom: ${props => props.modal ? `0` : `1px solid #555`};
`;

export const ReadMore = styled.p`
    font-size: 105%;
    text-align: left;
    padding: 10px 0 0 10px;
    border-top: 1px solid #555;
    flex: 1 1 100%;
    cursor: pointer;
    color: #0056b3;
`;

export const Description = styled.p`
    font-size: 120%;
    text-align: justify;
    line-height: 145%;
    word-spacing: 3px;
    padding: 0 10px;
    margin: 10px 0;
    flex: 1 1 100%;
`;

export const Button = styled.button`
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
