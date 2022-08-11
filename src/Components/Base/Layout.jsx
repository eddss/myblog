import React from "react";
import styled, { css } from "styled-components";
import Navi from "./Navi";

const Box = styled.main`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "blue"};
  display: flex;
  height: calc(100vh - 150px);
`;

const Layout = ({ children }) => {
  return (
    <Box>
      <Navi></Navi>
      {children}
    </Box>
  );
};

export default Layout;
