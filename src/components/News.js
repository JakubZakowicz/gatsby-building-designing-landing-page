import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import { InView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from '../utils/animate'

const News = () => {
  const newsInputRef = useRef()
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    h3: useSpring(animate(displayed, 500)),
    h1: useSpring(animate(displayed, -500)),
    bar: useSpring(animate(displayed, 500)),
  }

  return (
    <Container>
      <LatestNews>
        <div className="margin">
          <InView
            as="div"
            onChange={(inView) => checkInView(inView, setDisplayed)}
          >
            <animated.h3 style={animations.h3}>latest news</animated.h3>
            <animated.h1 style={animations.h1}>
              top insights on the current industry
            </animated.h1>
            <Bar style={animations.bar} />
          </InView>

          <NewsCarousel
            infiniteLoop
            showArrows={false}
            emulateTouch
            showStatus={false}
          >
            <div>
              <Title to="/">
                <h2>sustainable building design</h2>
              </Title>
              <p>Posted by admin July 4,2018</p>
              <p>
                The main objectives of sustainable design are to reduce, or
                completely avoid, depletion of critical resources like energy,
                water, land, and raw materials; prevent environmental
                degradation caused by facilities and infrastructure throughout
                their life cycle, and create build environments that...
              </p>
            </div>
            <div>
              <Title to="/">
                <h2>groundbreaking women in construction</h2>
              </Title>
              <p>Posted by admin July 4,2018</p>
              <p>
                Like many older U.S. cities, our nation's capital infrastructure
                dates back to the early 1800s and their storm and wasewater
                treatment system is no longer able to accomodate heavy rain
                events, vausing overflows of untreated waste into nearby rivers
                and...
              </p>
            </div>
            <div>
              <Title to="/">
                <h2>modern extension to brick house</h2>
              </Title>
              <p>Posted by admin July 4,2018</p>
              <p>
                The $2.5 million two-story 4,000-square-foot, addition to the
                existing hospital will provide expanded Interventional Radiology
                services on the second floor with a new interventional imaging
                room as well as associated control, patient holding, exam,
                storage and system electronics spaces. Work...
              </p>
            </div>
            <div>
              <Title to="/">
                <h2>fitting a square building</h2>
              </Title>
              <p>Posted by admin July 4,2018</p>
              <p>
                Four-hundred women from construction companies around the
                country gathered for this incredible two-day event in San
                Francisco, California, The main theme of the conference was the
                importance of diversity and inclusion to a company's success.
                Event speakers focused on the financial...
              </p>
            </div>
          </NewsCarousel>
        </div>
      </LatestNews>
      <Newsletter>
        <NewsletterForm>
          <h3>subscribe</h3>
          <h1>join our newsletter</h1>
          <p>
            Good news & event details as well straight to your incoming mail!
          </p>
          <NewsletterInput
            ref={newsInputRef}
            onBlur={() => newsInputRef.current.setSelectionRange(5, 5)}
            placeholder="Enter Your E-mail"
          />
        </NewsletterForm>
      </Newsletter>
    </Container>
  )
}

export default News

const LatestNews = styled.div`
  background: #000;
  color: #fff;
  width: 50%;

  .margin {
    width: 60%;
    margin-left: 25%;
    padding: 100px 0 100px 0;

    h1,
    h2,
    h3 {
      text-transform: uppercase;
      transition: all 1s ease-in-out;
    }

    h3 {
      font-family: "Montserrat", Sans-serif;
      font-weight: lighter;
      font-size: 15px;
    }

    h1 {
      font-size: 40px;
      width: 400px;
    }

    p {
      font-family: "Montserrat", Sans-serif;
      line-height: 30px;
    }
  }
`

const NewsCarousel = styled(Carousel)`
  div {
    text-align: left;
    padding-bottom: 10px;
    margin-top: 35px;
  }
`

const Title = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e18f2f;
  }
`

const Newsletter = styled.div`
  width: 50%;
  background: #e18f2f;
  color: #fff;
`

const NewsletterForm = styled.form`
  width: 70%;
  margin: auto;
  padding: 100px 0 130px 0;

  h3,
  h1 {
    text-transform: uppercase;
  }

  h3,
  p {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
  }

  h3 {
    font-size: 15px;
  }
`

const NewsletterInput = styled.input`
  width: 80%;
  height: 40px;
  background: transparent;
  border: 1px solid white;
  padding-left: 15px;

  &,
  &::placeholder {
    font-family: "Montserrat", Sans-serif;
    color: #fff;
    font-size: 1rem;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    display: block;

    ${LatestNews} {
      width: 100%;

      div {
        margin-left: 0;
        width: 100%;

        h1,
        h2,
        h3,
        p {
          padding: 0 15px;
        }

        span {
          left: 15px;
        }
      }
    }

    ${Newsletter} {
      width: 100%;

      ${NewsletterForm} {
        width: 95%;
      }

      ${NewsletterInput} {
        width: 100%;
      }
    }
  }
`
