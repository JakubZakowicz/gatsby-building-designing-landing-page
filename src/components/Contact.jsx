import React, { useState } from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaVimeoV,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa"
import { InView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

import Bar from "./Bar"
import { checkInView } from "../utils/checkInView"
import { animate } from "../utils/animate"
import {
  Container,
  ContactForm,
  ContactLink,
  SocialMedia,
  SocialLink,
} from "../styles/contactStyles"

const Contact = () => {
  const [displayed, setDisplayed] = useState(false)

  const animations = {
    h3: useSpring(animate(displayed, 300)),
    h1: useSpring(animate(displayed, -300)),
    bar: useSpring(animate(displayed, 200)),
  }

  return (
    <Container>
      <InView as="div" onChange={inView => checkInView(inView, setDisplayed)}>
        <animated.h3 style={animations.h3}>let's get in touch</animated.h3>
        <animated.h1 style={animations.h1}>contact details</animated.h1>
        <Bar style={animations.bar} />
      </InView>
      <div className="flex">
        <div>
          <p>
            Phone: <ContactLink to="/">(555) 123-4567</ContactLink>
            <br />
            E-mail: <ContactLink>info@demolink.org</ContactLink>
            <br />
            Address: Alexandria, 32 Washington str, 22303
            <br />
            Opening hours:
            <br />
            Monday - Thoursday 10:00 - 23.00
            <br />
            Friday - Sunday 10:00 - 19:00
          </p>
          <SocialMedia>
            <SocialLink to="/">
              <FaFacebookF />
            </SocialLink>
            <SocialLink to="/">
              <FaTwitter />
            </SocialLink>
            <SocialLink to="/">
              <FaGooglePlusG />
            </SocialLink>
            <SocialLink to="/">
              <FaVimeoV />
            </SocialLink>
            <SocialLink to="/">
              <FaYoutube />
            </SocialLink>
            <SocialLink to="/">
              <FaPinterest />
            </SocialLink>
          </SocialMedia>
        </div>
        <ContactForm>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your E-mail" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">send</button>
        </ContactForm>
      </div>
    </Container>
  )
}

export default Contact
