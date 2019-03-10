import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"

const PersonalPage = ({ location }) => (
  <Layout location={location}>
    <Home location={location} />
  </Layout>
)

export default PersonalPage
