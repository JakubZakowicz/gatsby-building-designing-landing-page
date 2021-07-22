import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaGooglePlusG, 
  FaVimeoV, 
  FaYoutube,
  FaPinterest
} from 'react-icons/fa'

const Contact = () => {
  return (
    <Container>
      <h3>let's get in touch</h3>
      <h1>contact details</h1>
      <div className="flex">
        <div>
          <p>
            Phone: <ContactLink to="/">(555) 123-4567</ContactLink><br/>
            E-mail: <ContactLink>info@demolink.org</ContactLink><br/>
            Address: Alexandria, 32 Washington str, 22303<br/>
            Opening hours:<br/>
            Monday - Thoursday 10:00 - 23.00<br/>
            Friday - Sunday 10:00 - 19:00
          </p>
          <SocialMedia>
            <SocialLink to="/"><FaFacebookF /></SocialLink>
            <SocialLink to="/"><FaTwitter /></SocialLink>
            <SocialLink to="/"><FaGooglePlusG /></SocialLink>
            <SocialLink to="/"><FaVimeoV /></SocialLink>
            <SocialLink to="/"><FaYoutube /></SocialLink>
            <SocialLink to="/"><FaPinterest /></SocialLink>
          </SocialMedia>
        </div>
        
        <ContactForm>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your E-mail" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">send</button>
        </ContactForm>
      </div>
    </Container>
  )
}

export default Contact

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;

  input, textarea {
    background: rgba(0, 0, 0, .05);
    margin-top: 20px;
    border: none;
  }

  input::placeholder, 
  textarea::placeholder {
    font-family: "Montserrat", Sans-serif;
    font-size: 16px;
    font-weight: lighter;
    padding-left: 10px;
    padding-top: 10px;
  }

  input {
    height: 45px;
  }

  textarea {
    height: 210px;
  }

  button {
    margin-top: 50px;
    background: transparent;
    color: #e18f2f;
    border: 1px solid #e18f2f;
    transition: all 0.2s ease-in-out;
    font-size: 15px;
    padding: 15px;
    text-transform: uppercase;
    letter-spacing: 5px;
    width: 160px;

    &:hover {
        background: #e18f2f;
        color: #fff;
    }
  }
`

const ContactLink = styled(Link)`
  color: #e18f2f;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
  margin-top: 40px;
`

const SocialLink = styled(Link)`
  color: #000;
  transition: all 0.2s ease-in-out;
  font-size: 20px;

  &:hover {
    color: #e18f2f;
  }
`

const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-bottom: 80px;

  h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 15px;
  }

  h1, h3 {
    text-transform: uppercase;
  }

  p {
    font-family: "Montserrat", Sans-serif;
    line-height: 30px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;

    .flex {
      display: block;
    }

     h3, h1, .flex {
      padding: 0 20px;
    }

    ${ContactForm} {
      width: 100%;

      button {
        margin-bottom: 100px;
      }
    }

  }
`