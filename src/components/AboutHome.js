import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { InView } from "react-intersection-observer"

import Services from "./Services"
import Testimonials from "./Testimonials"
import Advantages from "./Advantages"
import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"

const AboutHome = () => {
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    titleH4: useSpring({
      transform: displayed ? "translate(0)" : "translate(300px)",
      opacity: displayed ? 1 : 0,
    }),
    titleH2: useSpring({
      transform: displayed ? "translate(0)" : "translate(-300px)",
      opacity: displayed ? 1 : 0,
    }),
    bar: useSpring({
      transform: displayed ? "translate(0)" : "translate(200px)",
      opacity: displayed ? 1 : 0,
    }),
  }

  return (
    <AboutContainer>
      <TitleContainer>
        <Title>
          <InView
            as="div"
            style={{ position: "relative" }}
            onChange={(inView) => checkInView(inView, setDisplayed)}
          >
            <animated.h4 style={animations.titleH4}>about company</animated.h4>
            <animated.h2 style={animations.titleH2}>
              we create and turn into reality
            </animated.h2>
            <Bar style={animations.bar} />
          </InView>
        </Title>
        <Description>
          <p>
            <strong>
              We apply innovative design solutions to enhance people's
              residential wellbeing and to help workplaces succed! All our team
              collaborates with our clients!
            </strong>
          </p>

          <p>
            All our team collaborates with out clients, across all of our 3
            offices, which are located throughout the US. Our mission is to
            implement the outstanding design ideas and solutions for any project
            we're working on. During that process we carefully combine client's
            guidelines, technical pssibilitis, as well as the environmental
            issues. Enginnering and interior design solutions that we deliver
            are usualy born after a collaborative process
          </p>
        </Description>
      </TitleContainer>
      <Services />
      <Advantages />
      <Testimonials />
    </AboutContainer>
  )
}

export default AboutHome

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
`

const Title = styled.div`
  width: 25%;
  text-transform: uppercase;

  h4 {
    font-size: 15px;
    font-weight: lighter;
    transition: all 1s ease-in-out;
  }

  h2 {
    font-size: 40px;
    font-weight: bolder;
    letter-spacing: 3px;
    transition: all 1s ease-in-out;
  }
`

const Description = styled.div`
  font-family: "Montserrat", Sans-serif;
  margin-top: 65px;
  margin-left: 20px;
  line-height: 25px;
  width: 65%;
`

const AboutContainer = styled.div`
  position: relative;

  @media (max-width: 767px) {
    ${TitleContainer} {
      display: block;
      width: 100%;

      ${Title} {
        display: block;
        width: 70%;

        h4,
        h2 {
          padding-left: 12px;
        }

        span {
          left: 12px;
        }
      }

      ${Description} {
        width: 96%;
        margin-left: 0;

        p {
          padding: 0 12px;
        }
      }
    }
  }
`
