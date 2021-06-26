import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import { BgImage } from 'gbimage-bridge'

const Header = () => {
  const { backgroundImage } = useStaticQuery(graphql`
      query BackgroundImageQuery {
        backgroundImage: file(childImageSharp: {}, relativePath: {eq: "background1.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 50,
              webpOptions: {quality: 70}
            )
          }
        }
      }
    `)

  const pluginImage = getImage(backgroundImage)
 
  return (
    <Heading image={pluginImage}>
      <Title>
        <Show>
          <h1>we build the future</h1>
          <h2>best ideas - best solution - best result</h2>
          <button>view more</button>
        </Show>
      </Title>
      <Arrow left><GoChevronLeft /></Arrow>
      <Arrow><GoChevronRight /></Arrow> 
    </Heading>
  )
}

export default Header

const Heading = styled(BgImage)`
  width: 100%;
  height: 100vh;
  position: relative;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100vh;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    text-align: center;
  }

  h1 {
    font-size: 70px;
    text-transform: uppercase;
  }

  h2 {
    text-transform: capitalize;
    font-size: 40px;
    font-weight: lighter;
  }

  button {
    padding: 10px 20px;
    background: #f7992b;
    border: 3px solid #f7992b;
    font-size: 30px;
    color: #fff;
    border-radius: 5px;
    transition: 0.2s all ease-in-out;
    text-transform: capitalize;
  }

  button:hover {
    background: transparent;
    color: #f7992b;
  }
`

const Arrow = styled.span`
  position: absolute;
  top: 50%;
  ${ props => props.left ? "left: 30px;" : "right: 30px;"}
  font-size: 40px;
  color: #fff;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
  const show = keyframes`
    from {
      opacity: 0;
      transform: translateY(100px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  `

  const Show = styled.div`
    animation: ${show} 0.2s linear;
  `