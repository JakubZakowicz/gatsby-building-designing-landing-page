import React from 'react'
import styled from 'styled-components'

const News = () => {
  return (
    <Container>
      <LatestNews>
        <div>
          <h3>latest news</h3>
          <h1>top insights on the current industry</h1>
          <h2>sustainable building design</h2>
          <p>Posted by admin July 4,2018</p>
          <p>The main objectives of sustainable design are to reduce, or completely avoid, depletion of critical resources like energy, water, land, and raw materials; prevent environmental degradation caused by facilities and infrastructure throughout their life cycle, and create build environments that...</p>
        </div>
        
      </LatestNews>
      <Newsletter>
        <NewsletterForm>
          <h3>subscribe</h3>
          <h1>join our newsletter</h1>
          <p>Good news & event details as well straight to your incoming mail!</p>
          <NewsletterInput placeholder="Enter Your E-mail" />
        </NewsletterForm>
      </Newsletter>
    </Container>
  )
}

export default News

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    display: block;
  }
`

const LatestNews = styled.div`
  background: #000;
  color: #fff;
  width: 50%;

  div {
    width: 60%;
    margin-left: 25%;
    padding: 100px 0 100px 0;

    p {
      font-family: "Montserrat", Sans-serif;
    }

  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

const Newsletter = styled.div`
  width: 50%;
  background: #e18f2f;
  color: #fff;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const NewsletterForm = styled.form`
  width: 70%;
  margin: auto;
  padding: 50px 0 50px 0;

  h3, h1 {
    text-transform: uppercase;
  }
`

const NewsletterInput = styled.input`
  width: 80%;
  height: 40px;
  background: transparent;
  border: 1px solid white;

  &::placeholder {
    color: #fff;
    padding-left: 15px;
  }
`