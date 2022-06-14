import React from "react"

import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { Carousel } from "react-responsive-carousel"
import { getImage } from "gatsby-plugin-image"

import { Heading, Title, Show, Arrow } from "../styles/headerStyles"
import { useGetHeaderData } from "../queries/headerDataQuery"

const Header = () => {
  const { backgroundImages, titles } = useGetHeaderData()

  const pluginImages = backgroundImages.nodes
  const headerTitles = titles.edges

  return (
    <Carousel
      infiniteLoop
      emulateTouch
      showStatus={false}
      autoPlay={false}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <Arrow left onClick={onClickHandler}>
            <GoChevronLeft />
          </Arrow>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <Arrow onClick={onClickHandler}>
            <GoChevronRight />
          </Arrow>
        )
      }
    >
      {pluginImages.map((pluginImage, index) => (
        <Heading key={index} image={getImage(pluginImage)}>
          <Title>
            <Show>
              <h1>{headerTitles[index].node.title}</h1>
              <h2>{headerTitles[index].node.subtitle}</h2>
              <button>view more</button>
            </Show>
          </Title>
        </Heading>
      ))}
    </Carousel>
  )
}

export default Header

