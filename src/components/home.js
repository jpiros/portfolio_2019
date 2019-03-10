import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import logo from "../images/jp_logo.svg"

const HomeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 200px;
  bottom: 0;
  right: 0;

  img {
    width: 200px;
  }
  h1 {
    font-size: 3rem;
    color: #fff;
  }
  p {
    font-size: 1.5rem;
    color: #fff;
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
            <img src={logo} alt="Jason Piros Logo" />
            <h1>JASON PIROS</h1>

            <p>I am a Frontend Engineer</p>
          </BackgroundImage>
        </HomeWrapper>
      )
    }}
  />
)

export default Home
