import React from "react"

import Layout from "../components/layout"
import ResumeContent from "../components/resumeContent"

const ResumePage = ({ location }) => (
  <Layout location={location}>
    <ResumeContent />
  </Layout>
)

export default ResumePage
