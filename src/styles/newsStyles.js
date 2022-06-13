import styled from "styled-components"
import { Link } from "gatsby"
import { Carousel } from "react-responsive-carousel"

export const LatestNews = styled.div`
  background: #000;
  color: #fff;
  width: 50%;

  .margin {
    width: 60%;
    margin-left: 25%;
    padding: 100px 0 100px 0;

    h1,
    h2,
    h3 {
      text-transform: uppercase;
      transition: all 1s ease-in-out;
    }

    h3 {
      font-family: "Montserrat", Sans-serif;
      font-weight: lighter;
      font-size: 15px;
    }

    h1 {
      font-size: 40px;
      width: 400px;
    }

    p {
      font-family: "Montserrat", Sans-serif;
      line-height: 30px;
    }
  }
`

export const NewsCarousel = styled(Carousel)`
  div {
    text-align: left;
    padding-bottom: 10px;
    margin-top: 35px;
  }
`

export const Title = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e18f2f;
  }
`

export const Newsletter = styled.div`
  width: 50%;
  background: #e18f2f;
  color: #fff;
`

export const NewsletterForm = styled.form`
  width: 70%;
  margin: auto;
  padding: 100px 0 130px 0;

  h3,
  h1 {
    text-transform: uppercase;
  }

  h3,
  p {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
  }

  h3 {
    font-size: 15px;
  }
`

export const NewsletterInput = styled.input`
  width: 80%;
  height: 40px;
  background: transparent;
  border: 1px solid white;
  padding-left: 15px;

  &,
  &::placeholder {
    font-family: "Montserrat", Sans-serif;
    color: #fff;
    font-size: 1rem;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    display: block;

    ${LatestNews} {
      width: 100%;

      div {
        margin-left: 0;
        width: 100%;

        h1,
        h2,
        h3,
        p {
          padding: 0 15px;
        }

        span {
          left: 15px;
        }
      }
    }

    ${Newsletter} {
      width: 100%;

      ${NewsletterForm} {
        width: 95%;
      }

      ${NewsletterInput} {
        width: 100%;
      }
    }
  }
`