import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import Testimonials from './Testimonials'

const AboutHome = () => {

    const { services } = useStaticQuery(graphql`
        query ServicesQuery {
            services: allFile(
            filter: {relativePath: {regex: "/services/"}}
            ) {
            nodes {
                childImageSharp {
                    gatsbyImageData
                    }
                }
            }
        }
    `)

    const serviceLinks = ['architecture', 'engineering', 'interior design']

    const serviceImages = services.nodes

    return (
        <AboutContainer>
            <TitleContainer>
                <Title>
                    <h4>about company</h4>
                    <h2>we create and turn into reality</h2>
                </Title>
                <Description>
                    <p><strong>We apply innovative design solutions to enhance people's residential wellbeing and to help workplaces succed! All our team collaborates with our clients!</strong></p>

                    <p>All our team collaborates with out clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we're working on. During that process we carefully combine client's guidelines, technical pssibilitis, as well as the environmental issues. Enginnering and interior design solutions that we deliver are usualy born after a collaborative process</p>
                </Description>
            </TitleContainer>

            <Services>
                {serviceImages.map((serviceImage, index) => (
                    <Service image={getImage(serviceImage)}>
                        <ServiceLink to='/about'>{ serviceLinks[index] }</ServiceLink>
                    </Service>
                ))}
            </Services>

            <Advantages>
                <div>
                    <h2>advantages</h2>
                    <h1>working on <br /> exclusive projects</h1>

                    <p>Designing sustainable, high-performance buildings requires an integration of architectural and engineered systems into a balanced design of sustainability an cost-effectiveness. Archus merges these practices with the unique requirements and guidelines necessary for advanced technology facilities.</p>

                    <button>view more</button>
                </div>
            </Advantages>

           <Testimonials />
        </AboutContainer>
        
    )
}

export default AboutHome

const AboutContainer = styled.div`
    position: relative;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: auto;
`

const Title = styled.div`
    width: 25%;
    text-transform: uppercase;

    h4 {
        font-size: 15px;
        font-weight: lighter;
    }

    h2 {
        font-size: 40px;
        font-weight: bolder;
        letter-spacing: 3px;
    }
`

const Description = styled.div`
    font-family: "Montserrat", Sans-serif;
    margin-top: 65px;
    margin-left: 20px;
    line-height: 25px;
    width: 65%;
`

const Services = styled.div`
    margin: auto;
    margin-top: 40px;
    width: 1175px;
    display: flex;
    justify-content: space-between;
`

const Service = styled(BgImage)`
    position: relative;
    width: 370px;
    height: 515px;
    z-index: 100;
`

const ServiceLink = styled(Link)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    color: white;
    font-size: 25px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        color: #e18f2f;
    }
`

const Advantages = styled.div`
    background: #000;
    color: #fff;
    width: 70%;
    padding: 100px 0;
    margin-top: 250px;
    font-weight: lighter;
    
    div {
        width: 50%;
        margin: auto;
    }

    h1, h2 {
        text-transform: uppercase;
    }

    p {
        line-height: 30px;
        width: 70%;
    }

    button {
        background: transparent;
        color: #e18f2f;
        border: 1px solid #e18f2f;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
        padding: 20px 30px;
        margin-top: 20px;
        text-transform: uppercase;
        letter-spacing: 5px;

        &:hover {
            background: #e18f2f;
            color: #fff;
        }
    }
`