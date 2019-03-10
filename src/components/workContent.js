import React from "react"
import styled from "styled-components"

import Header from "./header"
import Section from "./section"

const WorkDescription = styled.p`
  a {
    color: #9773ff;
    &:visited {
      color: #9773ff;
    }
  }
`

const WorkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const WorkCard = styled.div`
  border: 1px solid #222324;
  padding: 1.5rem;
  text-align: center;
  width: 48%;
  margin-bottom: 2rem;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
  h5 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #9773ff;
  }
`

const WorkContent = () => (
  <>
    <Header title="Work Portfolio" icon="work" />

    <WorkDescription>
      See a small snapshot of company projects that I have developed,
      co-developed, or heavily maintained. Please note that due to the
      proprietary nature of these company projects, I am unable to show any
      related screenshots or direct links to these products.
    </WorkDescription>

    <Section title="Canary Health - Platform UI">
      <WorkDescription>
        Platform UI is a web platform that allows the registration of new
        patients, and serves as the admin for the Better Choices, Better Health
        workshops provided by Canary Health.
      </WorkDescription>
      <WorkSection>
        <WorkCard>
          <h4>User Admin</h4>
          <h5>Goal</h5>
          <span>
            Provide a faster, cleaner user interface to manage the users of the
            Better Choices, Better Health programs.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Uses a multi-filter to narrow down a list of users based on
            different criteria. Masks and suppresses Personal Identifiable
            Information (PII) from being displayed on load.
          </span>
          <h5>Tech</h5>
          <span>React, Apollo Graphql, TypeScript, NodeJS</span>
        </WorkCard>
        <WorkCard>
          <h4>Fulfillment Admin</h4>
          <h5>Goal</h5>
          <span>Track the orders and shipments to patients.</span>
          <h5>Features/Highlights</h5>
          <span>
            Uses a multi-filter to narrow down a list of orders based on
            different criteria. Tracks and displays shipment status through USPS
            tracking.
          </span>
          <h5>Tech</h5>
          <span>React, Apollo Graphql, TypeScript, NodeJS</span>
        </WorkCard>
        <WorkCard>
          <h4>Library</h4>
          <h5>Goal</h5>
          <span>
            Give users access to read from a library of articles for various
            health categories.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Integration with the Contentful headless CMS, where all content is
            managed. Packaged as a standalone app and accessible through CDN,
            this app is able to be loaded in any platform.
          </span>
          <h5>Tech</h5>
          <span>React, Redux, TypeScript</span>
        </WorkCard>
        <WorkCard>
          <h4>Registration</h4>
          <h5>Goal</h5>
          <span>
            Provide new eligible users a multi-step registration process with
            real-time validation.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Provides real-time validation of user email, phone number, and
            screen name.
          </span>

          <h5>Tech</h5>
          <span>React, Apollo Graphql, TypeScript, NodeJS</span>
        </WorkCard>
      </WorkSection>
    </Section>

    <Section title="Internet Brands - Doctor Portal">
      <WorkDescription>
        Doctor Portal serves as a management tool for dental, chiropractic, and
        veterinary offices. Practices are able to manage their website, view the
        site analytics, send surveys and newsletters, track leads, and manage
        users. I have built/maintained 20+ apps for this platform, listed below
        are just a few.{" "}
        <a
          href="https://www.officite.com/dental/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See one of the product pages for Doctor Portal here
        </a>
      </WorkDescription>

      <WorkSection>
        <WorkCard>
          <h4>Secure Forms</h4>
          <h5>Goal</h5>
          <span>
            Choose from a list of predefined forms, or create customizable forms
            for your practice, and view form submissions from patients.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Utilizes a drag-and-drop library to create customizable form
            sections, question groups, and questions. The form is publishable to
            Patient Portal for patients to fill and submit.
          </span>

          <h5>Tech</h5>
          <span>Angularjs, MobX, PHP, JSON API</span>
        </WorkCard>
        <WorkCard>
          <h4>Secure Messaging</h4>
          <h5>Goal</h5>
          <span>
            Facilitate secure doctor-to-doctor communication through an
            email-like system.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Supports full mailbox functionality, multimedia attachments, and
            colleague/patient lookup through an integration with the contact
            database.
          </span>
          <h5>Tech</h5>
          <span>Angularjs, Froala Editor, PHP, JSON API</span>
        </WorkCard>
        <WorkCard>
          <h4>Contacts Manager</h4>
          <h5>Goal</h5>
          <span>Manage contact information and email reputation.</span>
          <h5>Features/Highlights</h5>
          <span>
            Supports bulk upload of CSV files to add/update a list of contacts.
            Tracks dropped/bounced/unsubscribed emails and provides steps to fix
            email reputation.
          </span>
          <h5>Tech</h5>
          <span>Angularjs, PHP</span>
        </WorkCard>
        <WorkCard>
          <h4>Call Tracking</h4>
          <h5>Goal</h5>
          <span>Track new call leads from phone campaigns.</span>
          <h5>Features/Highlights</h5>
          <span>
            Playback call recordings from phone conversations with patients.
            Utilizes the D3 library to display charts and stats for the diffent
            types of incoming leads.
          </span>
          <h5>Tech</h5>
          <span>Angularjs, D3, PHP</span>
        </WorkCard>
      </WorkSection>
    </Section>

    <Section title="Internet Brands - Patient Portal">
      <WorkDescription>
        Patient Portal serves as a management tool for patients. Client's
        patients are able to manage their forms, appointments, and send secure
        messages straight to their doctors.{" "}
        <a
          href="https://www.demandforce.com/product/patient-portal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the product page for Patient Portal here
        </a>
      </WorkDescription>

      <WorkSection>
        <WorkCard>
          <h4>Secure Messaging</h4>
          <h5>Goal</h5>
          <span>
            Facilitate secure patient-to-doctor communication through an
            email-like system.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Patients are able to send messages, attachments, and respond to
            multiple doctors.
          </span>
          <h5>Tech</h5>
          <span>React, Redux, Froala Editor, JSON API, PHP, NodeJS</span>
        </WorkCard>
        <WorkCard>
          <h4>Patient Forms</h4>
          <h5>Goal</h5>
          <span>
            Allow patients to submit digital forms for registration,
            prescription refills, and more.
          </span>
          <h5>Features/Highlights</h5>
          <span>
            Renders the forms published by Secure Forms in Doctor Portal.
            Patients may choose from a list of forms and view their recent
            submissions.
          </span>
          <h5>Tech</h5>
          <span>Angular 2+, JSON API, PHP, NodeJS</span>
        </WorkCard>
      </WorkSection>
    </Section>
  </>
)

export default WorkContent
