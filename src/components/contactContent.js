import React, { Component } from "react"
import styled from "styled-components"

import Header from "./header"
import Section from "./section"
import constants from "../utils/constants"

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`
const Input = styled.div`
  position: relative;
  width: 45%;
  margin-bottom: 3rem;

  @media (max-width: 767px) {
    width: 100%;
  }
  &.message {
    width: 100%;
  }
  input,
  textarea {
    width: 100%;
    border: 2px solid ${constants.primary};
    padding: 5px 10px;
    transition: all 0.5s ease;
    position: relative;
    z-index: 1;
    background-color: transparent;
    color: #fff;
    &:focus {
      border-color: #fff;
      outline: none;

      & + label {
        top: -32px;
        left: 0;
      }
    }
    &.filled + label {
      top: -32px;
      left: 0;
    }
  }
  label {
    font-weight: 500;
    position: absolute;
    top: 7px;
    left: 12px;
    transition: all 0.2s ease;
    z-index: 0;
  }
`

const Submit = styled.div`
  display: flex;
  justify-content: center;

  button {
    border: 2px solid ${constants.primary};
    color: ${constants.primary};
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;

    &:hover {
      color: #17181b;
      font-weight: 700;
      &:after {
        opacity: 1;
        left: 0;
        width: 100%;
      }
    }

    &:after {
      position: absolute;
      content: "";
      width: 30%;
      height: 100%;
      top: 0;
      left: 35%;
      background-color: ${constants.primary};
      opacity: 0;
      transition: all 0.3s ease;
      z-index: -1;
    }
  }
`

export default class ContactContent extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  render() {
    const handleNameChange = e => {
      this.setState({ name: e.target.value })
    }

    const handleEmailChange = e => {
      this.setState({ email: e.target.value })
    }

    const handleMessageChange = e => {
      this.setState({ message: e.target.value })
    }
    return (
      <>
        <Header title="Contact Me" icon="contact" />

        <Section title="Get In Touch">
          <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup>
              <Input>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={this.state.name.length ? "filled" : ""}
                  onChange={e => handleNameChange(e)}
                />
                <label htmlFor="name">Name</label>
              </Input>
              <Input>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={this.state.email.length ? "filled" : ""}
                  onChange={e => handleEmailChange(e)}
                />
                <label htmlFor="email">Email</label>
              </Input>
              <Input className="message">
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className={this.state.message.length ? "filled" : ""}
                  onChange={e => handleMessageChange(e)}
                />
                <label htmlFor="message">Message</label>
              </Input>
            </InputGroup>
            <Submit>
              <button type="submit">Send Message</button>
            </Submit>
          </form>
        </Section>
      </>
    )
  }
}
