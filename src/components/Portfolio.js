import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "react-modal"
import { Carousel } from "react-responsive-carousel"
import { InView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"
import Bar from "./Bar"

const modalStyle = {
  overlay: {
    background: "rgba(0, 0, 0, 0.75)",
    zIndex: "100000",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    background: "transparent",
    overflow: "hidden",
    border: "none",
  },
}

const Portfolio = () => {
  const { portfolioImgs, portfolioData } = useStaticQuery(graphql`
    query MyQuery {
      portfolioImgs: allFile(
        filter: {
          relativePath: { regex: "/portfolio/" }
          sourceInstanceName: { eq: "images" }
        }
        sort: { fields: relativePath, order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      portfolioData: allPortfolioDataJson {
        nodes {
          title
          desc
        }
      }
    }
  `)
  const [isModal, setIsModal] = useState(false)
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    h5: useSpring({
      transform: displayed ? "translate(0)" : "translate(300px)",
      opacity: displayed ? 1 : 0,
    }),
    h1: useSpring({
      transform: displayed ? "translate(0)" : "translate(-300px)",
      opacity: displayed ? 1 : 0,
    }),
    bar: useSpring({
      transform: displayed ? "translate(0)" : "translate(200px)",
      opacity: displayed ? 1 : 0,
    }),
  }

  return (
    <>
      <PortfolioContainer>
        <InView
          as="div"
          style={{ position: "relative" }}
          onChange={(inView) => {
            if (inView) {
              setDisplayed(true)
            }
          }}
        >
          <animated.h5 style={animations.h5}>Portfolio</animated.h5>
          <animated.h1 style={animations.h1}>our latest projects</animated.h1>
          <Bar style={animations.bar} />
        </InView>
        <p>
          We specialize in author's projects which represent your individuality.
          Out award-winning designers know how to create a prefect space space
          for your. We stand for durable materials, qualitative work and
          innovative technologies. Enjoy our unique architectural solution and
          design projects! Archivolt
        </p>
      </PortfolioContainer>
      <Projects>
        {portfolioImgs.nodes.map((portfolioImg, index) => (
          <Project>
            <img
              src={
                portfolioImg.childImageSharp.gatsbyImageData.images.fallback.src
              }
              alt=""
            />
            <ImageBg onClick={() => setIsModal(true)}>
              <div>
                <h4>{portfolioData.nodes[index].title}</h4>
                <h2>{portfolioData.nodes[index].desc}</h2>
              </div>
            </ImageBg>
          </Project>
        ))}
      </Projects>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ViewBtn>view more</ViewBtn>
      </div>
      <Modal
        isOpen={isModal}
        style={modalStyle}
        onRequestClose={() => setIsModal(false)}
      >
        <ModalCarousel
          infiniteLoop
          emulateTouch
          showStatus={false}
          showIndicators={false}
        >
          {portfolioImgs.nodes.map((portfolioImg) => (
            <div>
              <img
                src={
                  portfolioImg.childImageSharp.gatsbyImageData.images.fallback
                    .src
                }
                alt=""
              />
            </div>
          ))}
        </ModalCarousel>
      </Modal>
    </>
  )
}

export default Portfolio

const PortfolioContainer = styled.div`
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

const Project = styled.div`
  position: relative;

  img {
    width: 611px;
    height: 464px;
  }
`

const ImageBg = styled.div`
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

const ViewBtn = styled.button`
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

const ModalCarousel = styled(Carousel)``

const Projects = styled.div`
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
