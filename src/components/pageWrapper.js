import React from "react"
import styled from "styled-components"

const PageContainer = styled.section`
  margin-left: 200px;
  max-width: 960px;

  @media (max-width: 767px) {
    margin-left: 0;
    padding-top: 25px;
  }
`

const PageWrapper = ({ children }) => {
  return <PageContainer>{children}</PageContainer>
}

export default PageWrapper
