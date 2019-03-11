import React, { Component } from "react"
import styled from "styled-components"

import Header from "./header"
import Section from "./section"
import Social from "./social"
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
  &.error {
    input,
    textarea {
      border-color: #ff424d;
    }
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
    color: inherit;
    &:focus {
      border-width: 3px;
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
  position: relative;

  .submit {
    border: 2px solid ${constants.primary};
    color: ${constants.primary};
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 500;
    position: absolute;
    overflow: hidden;
    text-transform: uppercase;
    z-index: 0;
    left: 50%;
    transform: translateX(-50%);

    &:hover,
    &:focus {
      color: #fff;
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

const SocialWrapper = styled.div`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  margin-top: 6rem;
  color: ${constants.primary};

  svg:hover {
    color: ${constants.primary};
  }
`

export default class ContactContent extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    showError: false,
  }

  render() {
    const handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
      if (!this.state.name || !this.state.email || !this.state.message) {
        this.setState({ showError: true })
        e.preventDefault()
      }
    }

    return (
      <>
        <Header title="Contact Me" icon="contact" />

        <Section title="Get In Touch">
          <form
            name="contact"
            method="post"
            action="/success"
            onSubmit={e => handleSubmit(e)}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <InputGroup>
              <Input
                className={
                  this.state.showError && !this.state.name.length ? "error" : ""
                }
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={this.state.name.length ? "filled" : ""}
                  onChange={e => handleInputChange(e)}
                />
                <label htmlFor="name">Name</label>
              </Input>
              <Input
                className={
                  this.state.showError && !this.state.email.length
                    ? "error"
                    : ""
                }
              >
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={this.state.email.length ? "filled" : ""}
                  onChange={e => handleInputChange(e)}
                />
                <label htmlFor="email">Email</label>
              </Input>
              <Input
                className={`message ${
                  this.state.showError && !this.state.message.length
                    ? "error"
                    : ""
                }`}
              >
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className={this.state.message.length ? "filled" : ""}
                  onChange={e => handleInputChange(e)}
                />
                <label htmlFor="message">Message</label>
              </Input>
            </InputGroup>
            <Submit>
              <button type="submit" className="submit">
                Send Message
              </button>
            </Submit>
          </form>
          <SocialWrapper>
            <Social />
          </SocialWrapper>
        </Section>
      </>
    )
  }
}
