import styled from "styled-components"
import { Link } from "gatsby"

export const Background = styled.div`
  background: #2b3238;
`

export const About = styled.div`
  width: 25%;

  p {
    font-family: "Montserrat", Sans-serif;
    line-height: 25px;
  }
`

export const Tags = styled.div`
  width: 30%;

  div {
    display: flex;
    flex-wrap: wrap;
  }
`

export const Tag = styled(Link)`
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

export const RecentComments = styled.div`
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

export const Comment = styled(Link)`
  color: #e18f2f;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  line-height: 30px;

  &:hover {
    color: #fff;
  }
`

export const Author = styled(Link)`
  color: #fff;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #e18f2f;
  }
`

export const FooterContainer = styled.div`
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
