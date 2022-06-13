import styled from "styled-components"
import { Link } from 'gatsby'

export const Nav = styled.nav`
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

export const Logo = styled.img`
  margin-left: 20px;
`

export const NavLinks = styled.ul`
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
    transform: translateX(${props => (props.navLinks ? "-100%" : "0")});
    z-index: 1000;
  }
`

export const NavLink = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 17px;
  color: ${props => (props.active ? "#e18f2f" : "#fff")};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e18f2f;
  }
`

export const MenuBars = styled.span`
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