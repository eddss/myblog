import React from "react";
import styled, { css } from "styled-components";

const Box = styled.header`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  display: flex;
  height: 100px;
`;

const Header = ({ children }) => {
  return <Box color="red">호떡's 개발블로그</Box>;
};

export default Header;
