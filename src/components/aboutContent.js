import React, { Component } from "react"
import styled from "styled-components"

import Header from "./header"
import Section from "./section"

const AboutImage = styled.img`
  max-width: 40%;
  margin: 2rem;
`

const AboutWrapper = styled.div`
  display: flex;
`

const AboutSection = styled.div`
  color: #fff;
`

const SkillSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const SkillGroup = styled.div`
  width: 50%;
  margin-bottom: 1.5rem;
  h4 {
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    font-size: 0.9rem;
    margin: 0;
  }
`

const AboutContent = () => (
  <>
    <Header title="About Me" icon="user" />

    <Section title="Frontend Engineer">
      <p>
        My first taste of web development came in the era of GeoCities and
        Tripod.com. I would make fun little sites where I posted distorted
        images from photoshop, and even made a site that I wrote one of my
        history reports in. It was only for fun back then, but little did I know
        that ~13 years later it would become my passion.
      </p>
      <p>
        That passion led me to quitting my job in 2014 to join the first cohort
        of DevLeague, Hawaii's first Web Development Bootcamp. After 12 grueling
        weeks of non-stop coding, I ventured off to Los Angeles looking for the
        start of my new career path.
      </p>
      <p>
        I have 5+ years experience building user interfaces, integrating APIs,
        and my passion for developing has never ceased to grow. I love the
        process of bringing an idea to life and the constant learning along the
        way.
      </p>
    </Section>
    <Section title="Skills">
      <SkillSection>
        <SkillGroup>
          <h4>Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript (ES5+)</li>
            <li>React</li>
            <li>Graphql</li>
            <li>React Native</li>
            <li>Angularjs</li>
            <li>Angular 2+</li>
            <li>SASS</li>
          </ul>
        </SkillGroup>

        <SkillGroup>
          <h4>Workflow / Testing Utilities</h4>
          <ul>
            <li>Git</li>
            <li>Webpack</li>
            <li>Docker</li>
            <li>Jest</li>
            <li>Enzyme</li>
            <li>TypeScript</li>
          </ul>
        </SkillGroup>
        <SkillGroup>
          <h4>Backend</h4>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </SkillGroup>
        <SkillGroup>
          <h4>Libraries/Platforms</h4>
          <ul>
            <li>Apollo</li>
            <li>Redux</li>
            <li>D3</li>
          </ul>
        </SkillGroup>
      </SkillSection>
    </Section>
  </>
)

export default AboutContent
