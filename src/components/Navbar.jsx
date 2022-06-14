import React, { useState } from "react"
import { Link } from "gatsby"
import { GoThreeBars } from "react-icons/go"
import Modal from "react-modal"

import {
  Nav,
  NavLinks,
  NavLink,
  Logo,
  MenuBars,
} from "../styles/navbarStyles"
import { useGetLogoImage } from "../queries/logoImageQuery"

const Navbar = () => {
  const data = useGetLogoImage()
  const [navLinks, setNavLinks] = useState(false)

  const toggleModal = () => {
    setNavLinks(!navLinks)
  }

  return (
    <Nav>
      <Link>
        <Logo
          src={data.file.childImageSharp.fluid.src}
          width="197"
          height="50"
        />
      </Link>
      <NavLinks navLinks={navLinks}>
        <li>
          <NavLink to="/" active>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/">about</NavLink>
        </li>
        <li>
          <NavLink to="/">services</NavLink>
        </li>
        <li>
          <NavLink to="/">projects</NavLink>
        </li>
        <li>
          <NavLink to="/">blog</NavLink>
        </li>
      </NavLinks>
      <MenuBars onClick={toggleModal}>
        <GoThreeBars />
      </MenuBars>
      <Modal
        isOpen={navLinks}
        style={modalStyle}
        onRequestClose={toggleModal}
      ></Modal>
    </Nav>
  )
}

const modalStyle = {
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    display: "none",
  },
}

export default Navbar
