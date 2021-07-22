import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <Background>
      <FooterContainer>
        <About>
          <h3>about</h3>
          <p>Worky is the leader of providing architect services and implementing ideeas! We are here to meet your demand and resolve architecture issues the most beneficial way for you. Our skilled experts are able to resolve complex and unusual cases in the shortest time</p>
        </About>
        <Tags>
          <h3>tags</h3>
          <div>
            <Tag to="/">objects</Tag>
            <Tag to="/">blog</Tag>
            <Tag to="/">business</Tag>
            <Tag to="/">interiors</Tag>
            <Tag to="/">news</Tag>
            <Tag to="/">post</Tag>
            <Tag to="/">projects</Tag>
            <Tag to="/">design</Tag>
            <Tag to="/">construction</Tag>
          </div>
          
        </Tags>
        <RecentComments>
          <h3 id="recent-comments-header">recent comments</h3>
      
          <p><Author to="/">admin</Author> <Author to="/">July 4, 2018</Author></p>
          <h3><Comment to="/">sustainable building design</Comment></h3>
          <br />
          <p><Author to="/">admin</Author> <Author to="/">July 4, 2018</Author></p>
          <h3><Comment to="/">groundbreaking women in construction</Comment></h3>
        </RecentComments>
      </FooterContainer>
    </Background>
  )
}

export default Footer

const Background = styled.div`
  background: #2b3238;
`

const About = styled.div`
  width: 25%;

  p {
    font-family: "Montserrat", Sans-serif;
    line-height: 25px;
  }
`

const Tags = styled.div`
  width: 30%;

  div {
    display: flex;
    flex-wrap: wrap;
  }
`

const Tag = styled(Link)`
  border: 1px solid #fff;
  padding: 8px 20px;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-right: 3px;
  margin-bottom: 3px;

  &:hover {
    border-color: #e18f2f;
    color: #e18f2f;
  }
`

const RecentComments = styled.div`
  line-height: 15px;
  width: 20%;

  Link {
    color: #e18f2f;
  }

  #recent-comments-header {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: -5px;
  }

  p {
    margin-bottom: -10px;
  }
`

const Comment = styled(Link)`
  color: #e18f2f;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  line-height: 30px;

  &:hover {
    color: #fff;
  }
`

const Author = styled(Link)`
  color: #fff;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #e18f2f;
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  width: 70%;
  margin: auto;
  padding: 50px 0;

  div {
   
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;

    ${About}, ${Tags}, ${RecentComments} {
      width: 100%;
      padding: 0 12px;
    }

    ${About} {
      p {
        width: 95%;
      }
    }

    ${RecentComments} {
      margin-top: 50px;
    }
  }
`