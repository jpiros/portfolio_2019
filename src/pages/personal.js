import React from "react"

import Layout from "../components/layout"
import Home from "../components/homeContent"

const PersonalPage = ({ location }) => (
  <Layout location={location}>
    <Home location={location} />
  </Layout>
)

export default PersonalPage
