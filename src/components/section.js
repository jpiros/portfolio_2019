import React from "react"
import styled from "styled-components"

import constants from "../utils/constants"

const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    border-bottom: 2px solid ${constants.primary};
    display: inline-block;
    padding: 0.3rem 0.5rem;
    position: relative;
    font-size: 1.8rem;
    &:before {
      content: "";
      width: 2px;
      height: 0.3rem;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${constants.primary};
    }
    &:after {
      content: "";
      width: 2px;
      height: 0.3rem;
      position: absolute;
      bottom: 0;
      right: 0;
      background: ${constants.primary};
    }
  }
`

const Section = ({ title, children }) => (
  <div>
    {title && (
      <SectionHeader>
        <h3>{title}</h3>
      </SectionHeader>
    )}
    <div>{children}</div>
  </div>
)

export default Section
