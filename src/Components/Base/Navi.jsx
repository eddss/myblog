import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;
const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
const Box = styled.nav`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${(props) => props.color || "purple"};
  display: flex;
  width: 300px;
`;

const Navi = () => {
  const menus = [
    { name: "내가 쓴 리뷰", path: "/" },
    { name: "나만의 맛집 리스트", path: "/mylist" },
    { name: "즐겨찾기 한 맛집 리스트", path: "/likedlist" },
    { name: "설정", path: "/setting" },
  ];
  return (
    <Box>
      {/* <Profile></Profile> */}
      {/* <Menu> */}
      <ul>
        {menus.map((menu, index) => {
          return (
            <li>
              <span
                exact
                style={{ color: "gray", textDecoration: "none" }}
                to={menu.path}
                key={index}
                activeStyle={{ color: "black" }}
              >
                {menu.name}
              </span>
            </li>
          );
        })}
      </ul>
      {/* </Menu> */}
    </Box>
  );
};

export default Navi;
