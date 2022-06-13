import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

export const TestimonialsContainer = styled.div`
  position: absolute;
  top: 500px;
  right: 0;
  width: 50%;
  z-index: 10 @media (max-width: 767px) {
    position: static;
    width: 100%;
  }
`

export const OrangeBg = styled.div`
  background: rgba(247, 153, 43, 0.8);
  padding: 500px 0 100px 0;
  color: #fff;

  h3,
  h1 {
    margin-left: 100px;
    text-transform: uppercase;
  }

  h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2.5rem;
  }
`

export const TestimonialCarousel = styled(Carousel)`
  width: 80%;

  div {
    width: 50%;
    margin-left: 100px;
    padding: 10px 0;
  }

  p {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 1.3rem;
    line-height: 30px;
    text-align: left;
  }

  h3 {
    text-transform: uppercase;
    text-align: left;
  }
`