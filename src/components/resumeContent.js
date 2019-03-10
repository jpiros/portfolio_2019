import React from "react"
import styled from "styled-components"

import Header from "./header"
import Section from "./section"
import constants from "../utils/constants"

const ResumeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`
const ResumeSection = styled.ul`
  list-style: none;
  margin: 0;
`
const ResumeGroup = styled.li`
  text-align: left;
  position: relative;
  padding: 0.5rem 1rem;
  margin: 4rem;
  border-left: 2px solid ${constants.primary};

  &:before {
    content: "";
    position: absolute;
    top: -0.55rem;
    left: -0.35rem;
    width: 10px;
    height: 10px;
    border: 2px solid #9773ff;
    border-radius: 50%;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -0.55rem;
    left: -0.35rem;
    width: 10px;
    height: 10px;
    border: 2px solid #9773ff;
    border-radius: 50%;
  }

  .endYear {
    position: absolute;
    left: -5rem;
    top: -1rem;
    font-size: 1rem;
    width: 4rem;
    text-align: right;
  }
  .startYear {
    position: absolute;
    left: -5rem;
    bottom: -1rem;
    font-size: 1rem;
    width: 4rem;
    text-align: right;
  }

  h4 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  h5 {
    margin-bottom: 0.5rem;
    color: #9773ff;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`

const ResumeContent = () => (
  <>
    <Header title="Resume" icon="resume" />
    <ResumeWrapper>
      <Section title="Work Experience">
        <ResumeSection>
          <ResumeGroup>
            <span className="endYear">Present</span>
            <span className="startYear">2018</span>
            <h4>Frontend Engineer</h4>
            <h5>Canary Health, Los Angeles, CA</h5>
            <p>
              Developed a new admin platform for the Better Choices, Better
              Health service. Main technologies used include React, Redux,
              Apollo GraphQL, TypeScript, AntDesign, and consumed APIs built in
              Ruby on Rails. Also created a standalone Library application that
              is integrated with the Contentful API and loaded in a legacy Ruby
              on Rails platform.
            </p>
          </ResumeGroup>
          <ResumeGroup>
            <span className="endYear">2018</span>
            <span className="startYear">2015</span>
            <h4>Web Developer</h4>
            <h5>Internet Brands, El Segundo, CA</h5>
            <p>
              Developed and maintained over 20+ Angularjs apps within Doctor
              Portal, a service platform for small-medium businesses in health.
              All apps integrated with APIs built in PHP Yii. Introduced and
              integrated Angularjs 1.5 component architecture as a standard for
              future apps, and served as an unofficial mentor to 4 junior
              developers.
            </p>
          </ResumeGroup>
          <ResumeGroup>
            <span className="endYear">2015</span>
            <span className="startYear">2014</span>
            <h4>Intern/Associate Web Developer</h4>
            <h5>Internet Brands, El Segundo, CA</h5>
            <p>
              Developed responsive and mobile-only HTML/CSS templates for
              various verticals within Internet Brands. Each site was built to
              adhere to Google's Mobile Friendly guidelines. Served as an intern
              for only 6 months, becoming one of the quickest intern-to-fulltime
              employees at the time.
            </p>
          </ResumeGroup>
          <ResumeGroup>
            <span className="endYear">2014</span>
            <span className="startYear">2011</span>
            <h4>Business Operations Analyst</h4>
            <h5>First Hawaiian Bank, Honolulu, HI</h5>
            <p>
              Maintained the Wealth Management department intranet website using
              HTML and CSS. Used multiple data sources to create ad-hoc
              financial reports for financial advisors in Microsoft Access and
              SQL server.
            </p>
          </ResumeGroup>
        </ResumeSection>
      </Section>
      <Section title="Education">
        <ResumeSection>
          <ResumeGroup>
            <span className="endYear">2014</span>
            <span className="startYear">2014</span>
            <h4>DevLeague</h4>
            <h5>Honolulu, HI</h5>
            <p>
              Completed over 800 hours in an immersive coding bootcamp to learn
              modern web development languages and best practice for building
              data driven applications for both mobile and web. Showcased
              multiple web applications at local technology events such as
              Civic-Celerator and Mini Maker Faire in Honolulu, HI.
            </p>
          </ResumeGroup>
          <ResumeGroup>
            <span className="endYear">2011</span>
            <span className="startYear">2005</span>
            <h4>University of Hawaii - BBA, Management Information Systems </h4>
            <h5>Honolulu, HI</h5>
            <p>
              Served as the Director of Marketing for the Information Technology
              Management Association. Served as a student web development intern
              for ToursHawaii.
            </p>
          </ResumeGroup>
        </ResumeSection>
      </Section>
    </ResumeWrapper>
  </>
)

export default ResumeContent
