import React from "react"
import styled from "styled-components"
import { FiUser, FiHome, FiBriefcase, FiFileText, FiMail } from "react-icons/fi"

import constants from "../utils/constants"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
  color: ${constants.primary};
  font-size: 2rem;
  margin-bottom: 2.8rem;

  h1 {
    margin: 0;
    line-height: 1;
    font-weight: 400;
  }
`

const icons = {
  user: <FiUser />,
  home: <FiHome />,
  work: <FiBriefcase />,
  resume: <FiFileText />,
  contact: <FiMail />,
}

const Header = ({ title, icon }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      {icons[icon]}
    </HeaderWrapper>
  )
}

export default Header
