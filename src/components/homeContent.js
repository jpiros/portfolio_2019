import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Typist from "react-typist"

import logo from "../images/jp_logo_light.png"
import Social from "./social"
import "react-typist/dist/Typist.css"

const HomeWrapper = styled.div`
  position: fixed;
  top: 0;
  left: -1px;
  bottom: -1px;
  right: 0;

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
  min-width: 380px;

  .Typist .Cursor {
    display: inline-block;
    font-weight: 300;
    font-size: 4.2rem;
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite;
  }

  @media (max-width: 767px) {
    margin-left: 0;
    min-width: 220px;

    .Typist .Cursor {
      font-size: 2.3rem;
    }
  }

  img {
    width: 120px;
    position: absolute;
    left: -138px;
    top: 11px;
    margin: 0;
    @media (max-width: 767px) {
      width: 60px;
      left: -78px;
      top: 12px;
    }
  }
  h1 {
    font-size: 4rem;
    color: #fff;

    @media (max-width: 767px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
      line-height: 2.5rem;
    }
  }
  h2 {
    font-size: 2rem;
    font-family: Roboto;
    color: #fff;
    font-weight: 300;
    line-height: 2.2rem;

    .Typist .Cursor {
      font-size: 2rem;
    }
    @media (max-width: 767px) {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      line-height: 1.2rem;

      .Typist .Cursor {
        font-size: 1.4rem;
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const SocialWrapper = styled.div`
  display: flex;
  font-size: 3rem !important;
  color: #fff !important;
  align-self: flex-end;
  margin-left: -0.3rem;
`

export default class Home extends Component {
  state = {
    headerTyped: false,
  }

  onHeaderTyped = () => {
    this.setState({ headerTyped: true })
  }

  render() {
    return (
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
                  <h1>
                    <Typist
                      avgTypingDelay={140}
                      startDelay={2000}
                      cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
                      onTypingDone={this.onHeaderTyped}
                    >
                      JASON PIROS
                    </Typist>
                  </h1>
                  <h2>
                    {this.state.headerTyped && (
                      <Typist
                        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 2000 }}
                        avgTypingDelay={140}
                        startDelay={1000}
                      >
                        Frontend Engineer
                      </Typist>
                    )}
                  </h2>
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
  }
}
