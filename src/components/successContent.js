import React from "react"
import styled from "styled-components"

import Header from "./header"
import sent from "../images/sent.svg"

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
  }

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`

const SuccessContent = () => (
  <>
    <Header title="Thank You" icon="thank" />
    <SuccessWrapper>
      <img src={sent} alt="Man standing next to envelope" />
      <p>Thanks for reaching out to me!</p>
    </SuccessWrapper>
  </>
)

export default SuccessContent
