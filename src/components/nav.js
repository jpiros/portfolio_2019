import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FiUser, FiHome, FiBriefcase, FiFileText } from "react-icons/fi"

import profile from "../images/profile.jpeg"
import constants from "../utils/constants"

const NavContent = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow: hidden;
  background: #17181b;
  color: #fff;
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
    padding: 0.6rem 0;
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

    svg {
      font-size: 1.2rem;
      margin-right: 0.6rem;
    }
  }
`

const Nav = ({ location }) => (
  <>
    <NavContent>
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
        <li className={location.pathname === "/about" ? "selected" : ""}>
          <Link className="navLink" to="/about">
            <FiUser />
            <span>About Me</span>
          </Link>
        </li>
        <li className={location.pathname === "/work" ? "selected" : ""}>
          <Link className="navLink" to="/work">
            <FiBriefcase />
            <span>Work</span>
          </Link>
        </li>
        <li className={location.pathname === "/resume" ? "selected" : ""}>
          <Link className="navLink" to="/resume">
            <FiFileText />
            <span>Resume</span>
          </Link>
        </li>
      </LinkContent>
    </NavContent>
  </>
)

export default Nav
