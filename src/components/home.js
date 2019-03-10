import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import logo from "../images/jp_logo_light.png"

const HomeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 120px;
  bottom: -1px;
  right: 0;

  img {
    width: 140px;
    margin: 0 1rem 0 0;
  }
  h1 {
    font-size: 5rem;
    color: #fff;
  }
  p {
    font-size: 2rem;
    color: #fff;
    margin-left: 8px;
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
  text-align: center;
`

const Home = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "sand_bg.jpg" }) {
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
              <h1>
                <img src={logo} alt="Jason Piros Logo" />
                JASON PIROS
              </h1>

              <p>Frontend Engineer</p>
            </HomeSection>
          </BackgroundImage>
        </HomeWrapper>
      )
    }}
  />
)

export default Home
