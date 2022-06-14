import React, { useState, useRef } from "react"

import { InView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from "../utils/animate"


import {
  Container,
  Title,
  LatestNews,
  NewsCarousel,
  Newsletter,
  NewsletterForm,
  NewsletterInput,
} from "../styles/newsStyles"
import { useGetNews } from "../queries/newsQuery"

const News = () => {
  const newsInputRef = useRef()
  const [displayed, setDisplayed] = useState(false)

  const { news } = useGetNews()

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
            onChange={inView => checkInView(inView, setDisplayed)}
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
            {news.nodes.map(singleNews => (
              <div key={singleNews.id}>
                <Title to="/">
                  <h2>{singleNews.title}</h2>
                </Title>
                <p>
                  Posted by {singleNews.author} {singleNews.createdAt}
                </p>
                <p>{singleNews.description}</p>
              </div>
            ))}
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
