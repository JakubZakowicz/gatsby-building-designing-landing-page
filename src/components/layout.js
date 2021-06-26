import * as React from "react"
import styled from 'styled-components'
import Navbar from './Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Layout = ({ children }) => {

  return (
    <Body>
      <Navbar />
      {children}
    </Body>
  )
}

export default Layout

const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;

`