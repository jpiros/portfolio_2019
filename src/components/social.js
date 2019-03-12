import React from "react"
import styled from "styled-components"
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"

const SocialWrapper = styled.div`
  a {
    font-size: inherit;
    margin: 1rem 1rem 2rem 0;
    cursor: pointer;
    color: inherit;

    &:hover {
      color: #fff;
    }
  }
`

const Social = () => (
  <SocialWrapper>
    <a
      href="https://www.linkedin.com/in/jasonpiros/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoLinkedin />
    </a>
    <a
      href="https://github.com/jpiros"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoGithub />
    </a>
    <a
      href="https://twitter.com/jasonpiros"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoTwitter />
    </a>
  </SocialWrapper>
)

export default Social
