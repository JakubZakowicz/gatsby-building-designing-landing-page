import * as React from "react"
import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CopyRights from "./CopyRights"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CopyRights />
    </>
  )
}

export default Layout
