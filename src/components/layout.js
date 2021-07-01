import * as React from "react"
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Navbar from './Navbar'

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
    </>
    
    
  )
}

export default Layout

