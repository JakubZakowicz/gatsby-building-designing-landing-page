import React, { useState } from "react"
import { InView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from "../utils/animate"
import { Container, Title, Brands } from "../styles/partnersStyles"
import { useGetHomeBrands } from "../queries/homeBrandsQuery"

const Partners = () => {
  const { homeBrands } = useGetHomeBrands()
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    h4: useSpring(animate(displayed, 300)),
    h1: useSpring(animate(displayed, -300)),
    bar: useSpring(animate(displayed, 200)),
  }

  return (
    <Container>
      <Title>
        <InView as="div" onChange={inView => checkInView(inView, setDisplayed)}>
          <animated.h4 style={animations.h4}>Partners</animated.h4>
          <animated.h1 style={animations.h1}>
            our clients & partners
          </animated.h1>
          <Bar style={animations.bar} />
        </InView>
      </Title>
      <Brands>
        {homeBrands.nodes.map((brand, index) => (
          <img
            key={index}
            src={brand.childImageSharp.gatsbyImageData.images.fallback.src}
            alt=""
          />
        ))}
      </Brands>
    </Container>
  )
}

export default Partners
