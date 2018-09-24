import styled from 'styled-components';

const Nav = styled.div`
    position: absolute;
    top : 0;
    right: 0;
    padding: 30px;
`;

const NavLink = styled.p`
    color: #fff;
    display: inline-block;
    margin-right: 30px;
    font-size: 120%;
    &:last-child {
        margin-right: 0;
    }
    a {
        color: inherit;
    }
`;

export { Nav, NavLink };