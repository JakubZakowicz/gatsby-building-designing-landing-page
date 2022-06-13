import React from "react"

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import Logo from "../images/header-logo.png"
import {
  CopyRightsContainer,
  SocialMedia,
  SocialLink,
} from "../styles/copyRightsStyles"

function CopyRights() {
  return (
    <CopyRightsContainer>
      <div className="center">
        <img src={Logo} alt="" />
        <p>&copy; 2021. Worky. All Rights Reserved.</p>
        <SocialMedia>
          <SocialLink to="/">
            <FaFacebookF />
          </SocialLink>
          <SocialLink to="/">
            <FaTwitter />
          </SocialLink>
          <SocialLink to="/">
            <FaInstagram />
          </SocialLink>
          <SocialLink to="/">
            <FaYoutube />
          </SocialLink>
        </SocialMedia>
      </div>
    </CopyRightsContainer>
  )
}

export default CopyRights
