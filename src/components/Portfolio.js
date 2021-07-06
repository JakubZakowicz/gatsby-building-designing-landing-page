import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Portfolio = () => {
    const { portfolioImgs } = useStaticQuery(graphql`
        query MyQuery {
            portfolioImgs: allFile(
                filter: {relativePath: {regex: "/portfolio/"}} 
                sort: { fields: relativePath order: ASC }) {
                    nodes {
                        childImageSharp {
                            gatsbyImageData
                        }
                }
            }
        }
    `)

    return (
        <>
            <PortfolioContainer>
                <div>
                    <h5>Portfolio</h5>
                    <h1>our latest projects</h1>
                </div>
                
                <p>We specialize in author's projects which represent your individuality. Out award-winning designers know how to create a prefect space space for your. We stand for durable materials, qualitative work and innovative technologies. Enjoy our unique architectural solution and design projects! Archivolt</p>
            </PortfolioContainer>

            <Projects>
                {portfolioImgs.nodes.map(portfolioImg => (
                    <Project>
                        <img src={portfolioImg.childImageSharp.gatsbyImageData.images.fallback.src} width="611" height="464" alt="" />
                        <ImageBg>
                            <div>
                                <h4>Engineering</h4>
                                <h2>Ace Hotel</h2>
                            </div> 
                        </ImageBg>
                    </Project>
                ))}
            </Projects>
        </>
        
    )
}

export default Portfolio

const PortfolioContainer = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    div {
        width: 30%;
    }
    
    h1, h5 {
        text-transform: uppercase;
    }

    h1 {
        font-size: 45px;
        letter-spacing: 5px;
        line-height: 50px;
    }

    h5 {
        font-size: 20px;
        margin-bottom: -20px;
    }

    p {
        font-size: 17px;
        width: 50%;
        margin-top: 75px;
    }
`

const Projects = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-row-gap: 15px;
    place-items: center;
`

const Project = styled.div`
    position: relative;
`

const ImageBg = styled.div`
    position: absolute;
    background: rgba(247,153,43, 0.8);
    top: 0;
    left: 0;
    width: 611px;
    height: 464px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 0.25s ease-in-out;
    opacity: 0;

    &:hover {
        opacity: 1;
    }

    div {
        text-align: center;
        text-transform: uppercase;
        line-height: 12px;
    }
`