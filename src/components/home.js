import React, { Component } from "react"
import styled from "styled-components"

import sand from "../images/sand_bg.png"
import logo from "../images/jp_logo.svg"

const HomeWrapper = styled.div`
  background-image: url(${sand});
  background-size: cover;
  position: fixed;
  top: 0;
  left: 200px;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`

const Home = () => (
  <>
    <HomeWrapper>
      <img src={logo} />
      <h1>JASON PIROS</h1>

      <p>I am a Frontend Engineer</p>
    </HomeWrapper>
  </>
)

export default Home
