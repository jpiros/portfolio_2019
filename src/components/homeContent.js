import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import logo from "../images/jp_logo_light.png"
import Social from "./social"

const HomeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: -1px;
  bottom: -1px;
  right: 0;

  img {
    width: 120px;
    position: absolute;
    left: -138px;
    top: 11px;
    margin: 0;
    @media (max-width: 767px) {
      width: 60px;
      left: -78px;
      top: 6px;
    }
  }
  h1 {
    font-size: 4rem;
    color: #fff;

    @media (max-width: 767px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  p {
    font-size: 2rem;
    color: #fff;
    @media (max-width: 767px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  .gatsby-background-image-bgImage {
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const HomeSection = styled.div`
  margin-left: 320px;
  position: relative;

  @media (max-width: 767px) {
    margin-left: 0;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  font-size: 3rem !important;
  color: #fff !important;
  align-self: flex-end;
  margin-left: -0.3rem;
`

const Home = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4096) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <HomeWrapper>
          <BackgroundImage fluid={imageData} classId="bgImage">
            <HomeSection>
              <img src={logo} alt="Jason Piros Logo" />
              <h1>JASON PIROS</h1>
              <p>Frontend Engineer</p>
              <SocialWrapper>
                <Social />
              </SocialWrapper>
            </HomeSection>
          </BackgroundImage>
        </HomeWrapper>
      )
    }}
  />
)

export default Home
