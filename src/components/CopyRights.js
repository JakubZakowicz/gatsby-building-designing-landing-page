import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { 
  FaFacebookF, 
  FaTwitter,
  FaInstagram, 
  FaYoutube,
} from 'react-icons/fa'
import Logo from '../images/header-logo.png'

function CopyRights() {
  return (
    <CopyRightsContainer>
      <div className="center">
        <img src={Logo} alt="" />
        <p>&copy; 2021. Worky. All Rights Reserved.</p>
        <SocialMedia>
          <SocialLink to="/"><FaFacebookF /></SocialLink>
          <SocialLink to="/"><FaTwitter /></SocialLink>
          <SocialLink to="/"><FaInstagram /></SocialLink>
          <SocialLink to="/"><FaYoutube /></SocialLink>
        </SocialMedia>
      </div>    
    </CopyRightsContainer>
  )
}

export default CopyRights

const CopyRightsContainer = styled.div`
  background: #000;
  color: #fff;
  padding: 7px 0;
  
  .center {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;

    img {
      width: 120px;
    }
  }

   @media (max-width: 767px) {
      .center {
        flex-direction: column;
        padding: 20px 0;
      }
    }
`

const SocialMedia = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-around;
`


const SocialLink = styled(Link)`
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e18f2f;
  }
`