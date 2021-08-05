import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 100px;
    width: calc(100% - 15px);
    min-height: 60px;
`

export const NavbarStyle = styled.div`
    height: 60px;
    display: flex;
    margin-left: 10%;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;

    .nav-menu {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 30px;
        list-style: none;
        text-align: center;
        justify-content: end;
        margin-right: 2rem;
        text-transform: uppercase;
    }

    .nav-links {
        color: #000;
        text-decoration: none;
        padding: 0.5rem 1rem;

        &:hover {
            color: #3D096E;
            border-bottom: 3px solid #3D096E;
        }
    }

    .menu-icon {
        display: none;
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > button {
        background: #3D096E;
        color: #fff;
        opacity: 0.8;

        font-size: 0.8rem;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;

        padding: 25px 30px 25px 30px;
        border-radius: 100px;
        border: none;
        cursor: pointer;

        &.white {
            background: #fff;
            color: #1a1720;
            opacity: 0.65;
        }

        & + button {
            margin: 10px 0 0;
        }
    }
`

export const Footer = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li {
            list-style: none;

            font-size: 14px;

            & + li {
                margin-top: 10px 0 0;
            }

            a {
                text-decoration: none;
                color: #393c41;

                &:hover {
                color: #000;
                }
            }   
        }
    }

    margin-bottom: 30px;

    @media (min-width: 600px) {
        margin-bottom: 38px;

        ul {
            flex-direction: row;

            li + li {
                margin: 0 0 0 30px;
            }
        }
    }
`