import styled from "styled-components"
import { Link } from "gatsby"

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;

  input,
  textarea {
    background: rgba(0, 0, 0, 0.05);
    margin-top: 20px;
    border: none;
    padding-left: 10px;
    font-size: 16px;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: "Montserrat", Sans-serif;
    font-size: 16px;
    font-weight: lighter;
  }

  input {
    height: 45px;
  }

  textarea {
    height: 200px;
    padding-top: 10px;
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

export const ContactLink = styled(Link)`
  color: #e18f2f;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
  margin-top: 40px;
`

export const SocialLink = styled(Link)`
  color: #000;
  transition: all 0.2s ease-in-out;
  font-size: 20px;

  &:hover {
    color: #e18f2f;
  }
`

export const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-bottom: 80px;

  h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 15px;
  }

  h1,
  h3 {
    text-transform: uppercase;
    transition: all 1s ease-in-out;
  }

  p {
    font-family: "Montserrat", Sans-serif;
    line-height: 30px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;

    .flex {
      display: block;
      margin-top: 45px;
    }

    h3,
    h1,
    .flex {
      padding: 0 20px;
    }

    span {
      left: 20px;
    }

    ${ContactForm} {
      width: 100%;

      button {
        margin-bottom: 100px;
      }
    }
  }
`
