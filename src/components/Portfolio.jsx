import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Modal from "react-modal"
import { InView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from "../utils/animate"
import {
  PortfolioContainer,
  Projects,
  Project,
  ImageBg,
  ViewBtn,
  ModalCarousel,
} from "../styles/portfolioStyles"

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
    h5: useSpring(animate(displayed, 300)),
    h1: useSpring(animate(displayed, -300)),
    bar: useSpring(animate(displayed, 200)),
  }

  return (
    <>
      <PortfolioContainer>
        <InView
          as="div"
          style={{ position: "relative" }}
          onChange={inView => checkInView(inView, setDisplayed)}
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
          <Project key={index}>
            <img
              src={
                portfolioImg.childImageSharp.gatsbyImageData.images.fallback.src
              }
              alt={portfolioData.nodes[index].title}
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
          {portfolioImgs.nodes.map((portfolioImg, index) => (
            <div key={index}>
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
