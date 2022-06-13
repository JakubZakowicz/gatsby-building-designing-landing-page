import React from "react"
import {
  Background,
  FooterContainer,
  About,
  Tags,
  Tag,
  RecentComments,
  Author,
  Comment,
} from "../styles/footerStyles"

const Footer = () => {
  return (
    <Background>
      <FooterContainer>
        <About>
          <h3>about</h3>
          <p>
            Worky is the leader of providing architect services and implementing
            ideeas! We are here to meet your demand and resolve architecture
            issues the most beneficial way for you. Our skilled experts are able
            to resolve complex and unusual cases in the shortest time
          </p>
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

          <p>
            <Author to="/">admin</Author> <Author to="/">July 4, 2018</Author>
          </p>
          <h3>
            <Comment to="/">sustainable building design</Comment>
          </h3>
          <br />
          <p>
            <Author to="/">admin</Author> <Author to="/">July 4, 2018</Author>
          </p>
          <h3>
            <Comment to="/">groundbreaking women in construction</Comment>
          </h3>
        </RecentComments>
      </FooterContainer>
    </Background>
  )
}

export default Footer
