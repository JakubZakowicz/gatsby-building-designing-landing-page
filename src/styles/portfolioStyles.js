import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

export const PortfolioContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  div {
    width: 30%;
  }

  h1,
  h5 {
    text-transform: uppercase;
    transition: all 1s ease-in-out;
  }

  h1 {
    font-size: 45px;
    letter-spacing: 5px;
    line-height: 50px;
  }

  h5 {
    font-size: 20px;
    margin-bottom: -20px;
  }

  p {
    font-family: "Montserrat", Sans-serif;
    font-size: 17px;
    width: 50%;
    margin-top: 75px;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;

    div {
      width: 50%;
    }

    h1,
    h5,
    p {
      padding: 0 12px;
    }

    p {
      width: 96%;
      margin-top: 60px;
    }

    span {
      left: 10px;
    }
  }
`

export const Project = styled.div`
  position: relative;

  img {
    width: 611px;
    height: 464px;
  }
`

export const ImageBg = styled.div`
  position: absolute;
  background: rgba(247, 153, 43, 0.8);
  top: 0;
  left: 0;
  width: 611px;
  height: 464px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 0.25s ease-in-out;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  div {
    text-align: center;
    text-transform: uppercase;
    line-height: 12px;
  }
`

export const ViewBtn = styled.button`
  background: transparent;
  color: #e18f2f;
  border: 1px solid #e18f2f;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  padding: 20px 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: auto;

  &:hover {
    background: #e18f2f;
    color: #fff;
  }
`

export const ModalCarousel = styled(Carousel)``

export const Projects = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-row-gap: 15px;
  place-items: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);

    ${Project} {
      img {
        width: 90%;
        height: 342px;
      }
    }

    ${ImageBg} {
      width: 90%;
      height: 342px;
    }
  }
`
