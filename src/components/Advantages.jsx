import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { InView } from "react-intersection-observer"

import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from '../utils/animate'
import { AdvantagesContainer, ViewBtn } from '../styles/advantagesStyles'

function Advantages() {
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    h1: useSpring(animate(displayed, -600)),
    h2: useSpring(animate(displayed, 600)),
    bar: useSpring(animate(displayed, 600)),
  }

  return (
    <AdvantagesContainer>
      <div className="margin">
        <InView
          as="div"
          style={{ position: "relative" }}
          onChange={(inView) => checkInView(inView, setDisplayed)}
        >
          <animated.h2 style={animations.h2}>advantages</animated.h2>
          <animated.h1 style={animations.h1}>
            working on <br /> exclusive projects
          </animated.h1>
          <Bar style={animations.bar} />
        </InView>
        <p>
          Designing sustainable, high-performance buildings requires an
          integration of architectural and engineered systems into a balanced
          design of sustainability an cost-effectiveness. Archus merges these
          practices with the unique requirements and guidelines necessary for
          advanced technology facilities.
        </p>
        <ViewBtn>view more</ViewBtn>
      </div>
    </AdvantagesContainer>
  )
}

export default Advantages
