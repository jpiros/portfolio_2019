import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  FiUser,
  FiHome,
  FiBriefcase,
  FiFileText,
  FiMenu,
  FiMail,
  FiMoon,
  FiSun,
} from "react-icons/fi"

import ThemeContext from "../context/themeContext"
import Social from "./social"
import profile from "../images/profile.jpeg"
import logo from "../images/jp_logo_light.png"
import constants from "../utils/constants"

const NavContent = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow: scroll;
  background: #17181b;
  color: #fff;
  z-index: 5;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    left: -200px;
    transition: all 0.3s ease;

    &.show {
      left: 0px;
    }
  }
`

const ProfileContent = styled.div`
  position: relative;
  img {
    width: 200px;
    margin-bottom: 0;
  }
  h1 {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 2rem;
    margin: 0;
    padding: 0.3rem 0;
    color: #fff;
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    text-align: center;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${constants.primary};
      opacity: 0.8;
      z-index: -1;
    }
  }
`

const LinkContent = styled.ul`
  list-style: none;
  margin: 0;

  li {
    border-bottom: 1px solid #202226;
    color: #777;
    padding: 1rem 0;
    margin-bottom: 0;

    &.selected {
      color: #fff;
    }
  }

  .navLink {
    font-size: 0.7rem;
    font-family: Roboto;
    text-transform: uppercase;
    line-height: 1rem;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: 0 0 0 1.4rem;
    display: flex;
    align-items: center;
    color: #777;
    &:visited {
      color: inherit;
    }
    &:hover {
      color: #fff;
    }

    svg {
      font-size: 1.2rem;
      margin-right: 0.6rem;
    }
  }
`

const HeaderNav = styled.div`
  position: fixed;
  top: -50px;
  left: 0;
  right: 0;
  height: 50px;
  background: #000;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    top: 0%;
    transition: all 0.3s ease;
  }

  h1 {
    font-size: 1.8rem;
    margin: 0;
    flex: 1;
    text-align: center;
    color: #fff;
  }
  img {
    margin: 0 0.5rem 0 0;
    width: 50px;
  }
  .menuToggle {
    padding: 0.5rem 1rem 0;
    cursor: pointer;
    svg {
      font-size: 2rem;
      color: #fff;
    }
  }
`

const FooterContent = styled.footer`
  margin-top: auto;
  padding: 1rem 0 1rem 1.2rem;
  width: 100%;
  font-size: 2rem;
  color: #777;
`

const ToggleMode = styled.div`
  display: flex;
  margin: 0 1.4rem;
  align-items: center;
  font-size: 1.2rem;
  color: #777;

  &.darkToggled {
    .moon {
      color: #fff;
    }
    .toggleSwitch {
      &:before {
        left: 3px;
        transition: left 0.5s ease;
      }
    }
  }

  &.lightToggled {
    .sun {
      color: #fff;
    }
    .toggleSwitch {
      &:before {
        left: 52px;
        transition: left 0.5s ease;
      }
    }
  }

  .toggleSwitch {
    width: 80px;
    height: 30px;
    background: #fff;
    border-radius: 25px;
    margin: 0 0.5rem;
    position: relative;
    outline: none;
    cursor: pointer;
    border: none;

    &:before {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #9773ff;
      top: 3px;
      left: 3px;
    }
  }
`

export default class Nav extends Component {
  state = {
    navToggled: false,
  }

  toggleMenu() {
    this.setState({ navToggled: !this.state.navToggled })
  }

  render() {
    const { location } = this.props

    return (
      <ThemeContext.Consumer>
        {theme => (
          <>
            <HeaderNav>
              <h1>
                <img src={logo} alt="Jason Piros Logo" />
                JASON PIROS
              </h1>
              <div className="menuToggle">
                <FiMenu onClick={() => this.toggleMenu()} />
              </div>
            </HeaderNav>
            <NavContent className={this.state.navToggled ? "show" : ""}>
              <ProfileContent>
                <h1>Jason Piros</h1>
                <img src={profile} alt="Jason Piros" />
              </ProfileContent>

              <LinkContent>
                <li className={location.pathname === "/" ? "selected" : ""}>
                  <Link className="navLink" to="/">
                    <FiHome />
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className={location.pathname === "/about/" ? "selected" : ""}
                >
                  <Link className="navLink" to="/about/">
                    <FiUser />
                    <span>About Me</span>
                  </Link>
                </li>
                <li
                  className={location.pathname === "/work/" ? "selected" : ""}
                >
                  <Link className="navLink" to="/work/">
                    <FiBriefcase />
                    <span>Work</span>
                  </Link>
                </li>
                <li
                  className={location.pathname === "/resume/" ? "selected" : ""}
                >
                  <Link className="navLink" to="/resume/">
                    <FiFileText />
                    <span>Resume</span>
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/contact/" ? "selected" : ""
                  }
                >
                  <Link className="navLink" to="/contact/">
                    <FiMail />
                    <span>Contact Me</span>
                  </Link>
                </li>
                {location.pathname !== "/" && (
                  <li>
                    <ToggleMode
                      className={theme.dark ? "darkToggled" : "lightToggled"}
                    >
                      <FiMoon className="moon" />
                      <button
                        type="button"
                        className="toggleSwitch"
                        onClick={theme.toggleDark}
                      />
                      <FiSun className="sun" />
                    </ToggleMode>
                  </li>
                )}
              </LinkContent>

              <FooterContent>
                <Social />
              </FooterContent>
            </NavContent>
          </>
        )}
      </ThemeContext.Consumer>
    )
  }
}
