import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GoThreeBars } from 'react-icons/go'
import Modal from 'react-modal'

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query LogoImageQuery {
            file(relativePath: {eq: "header-logo.png"}) {
            id
            childImageSharp {
                fluid {
                        src
                    }
                }
            }
        }
    `)
    
    const [navLinks, setNavLinks] = useState(false)

    const toggleModal = () => {
        setNavLinks(!navLinks)
    }
    return (
        <Nav>
            <Link><Logo src={data.file.childImageSharp.fluid.src} width="197" height="50" /></Link>
            <NavLinks navLinks={navLinks}>
                <li><NavLink to="/" active >home</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/services">services</NavLink></li>
                <li><NavLink to="/projects">projects</NavLink></li>
                <li><NavLink to="/blog">blog</NavLink></li>
            </NavLinks>
            <MenuBars onClick={toggleModal}><GoThreeBars /></MenuBars>
            <Modal 
                isOpen={navLinks}
                style={modalStyle}
                onRequestClose={toggleModal}
            >
            </Modal>
        </Nav>
    )
}

const modalStyle = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        display: 'none'
    }
}

export default Navbar

const Nav = styled.nav`
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.5);
    height: 105px;
    align-items: center;
    z-index: 100;

    @media (max-width: 767px) {
        justify-content: space-between;
    }
`

const Logo = styled.img`
    margin-left: 20px;
`

const NavLinks = styled.ul`

    li {
        display: inline;
        margin-left: 40px;
        list-style: none;

        @media (max-width: 767px) {
            margin-left: 0;
            margin-top: 20px;
        }
    }

    @media (max-width: 767px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        background: #000;
        right: -70%;
        top: -16px;
        width: 60%;
        height: 100vh;
        transition: all 0.3s ease-in-out;
        transform: translateX(${props => props.navLinks ? '-100%' : '0'});
        z-index: 1000;
    }
`

const NavLink = styled(Link)`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 17px;
    color: ${props => props.active ? '#e18f2f' : '#fff' };
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e18f2f;
    }
`

const MenuBars = styled.span`
    display: none;
    color: #fff;
    font-size: 30px;
    transition: all 0.2s ease-in-out;
    margin-right: 20px;

    &:hover {
        color: #e18f2f;
    }

    @media (max-width: 767px) {
        display: block;
    }
`