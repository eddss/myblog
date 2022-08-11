import React from "react";
import styled, { css } from "styled-components";

const Box = styled.footer`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  height: 50px;
`;

const Footer = ({ children }) => {
  return <Box color="green">Footer입니다</Box>;
};

export default Footer;
