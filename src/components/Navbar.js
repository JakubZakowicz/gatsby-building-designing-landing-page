import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query LogoImageQuery {
        imageSharp(id: {eq: "818a5c3e-08cc-5637-b246-168984cdfcd4"}) {
          id
          fluid {
            src
          }
        }
      }
    `)

    return (
        <Nav>
            <Link><Logo src={data.imageSharp.fluid.src} width="197" height="50" /></Link>
            <NavLinks>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                <li><NavLink to="/services">services</NavLink></li>
                <li><NavLink to="/projects">projects</NavLink></li>
                <li><NavLink to="/blog">blog</NavLink></li>
            </NavLinks>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.5);
    height: 105px;
    align-items: center;
    z-index: 100;
`

const Logo = styled.img``

const NavLinks = styled.ul`

    li {
        display: inline;
        margin-left: 40px;
        list-style: none; 
    }
`

const NavLink = styled(Link)`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 17px;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e18f2f;
    }
`