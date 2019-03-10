import React from "react"

import Layout from "../components/layout"
import WorkContent from "../components/workContent"

const WorkPage = ({ location }) => (
  <Layout location={location}>
    <WorkContent />
  </Layout>
)

export default WorkPage
