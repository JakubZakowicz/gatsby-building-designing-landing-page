import React, { useState } from "react"

import { useSpring, animated } from "react-spring"
import { InView } from "react-intersection-observer"

import Services from "./Services"
import Testimonials from "./Testimonials"
import Advantages from "./Advantages"
import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from '../utils/animate'
import { AboutContainer, TitleContainer, Description, Title } from "../styles/aboutStyles"

const AboutHome = () => {
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    titleH4: useSpring(animate(displayed, 300)),
    titleH2: useSpring(animate(displayed, -300)),
    bar: useSpring(animate(displayed, 200)),
  }

  return (
    <AboutContainer>
      <TitleContainer>
        <Title>
          <InView
            as="div"
            style={{ position: "relative" }}
            onChange={inView => checkInView(inView, setDisplayed)}
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
