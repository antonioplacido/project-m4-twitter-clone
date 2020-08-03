import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Icon } from "react-icons-kit";
import { home3 as HomeIcon } from "react-icons-kit/icomoon/home3";
import { user as UserIcon } from "react-icons-kit/icomoon/user";
import { bell as BellIcon } from "react-icons-kit/icomoon/bell";
import { bookmark as BookmarkIcon } from "react-icons-kit/icomoon/bookmark";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <EvenBiggerDiv>
      <Logo />
      <BigDiv>
        <div>
          <NavLink to="/">
            <Icon icon={HomeIcon} />
            <span>Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/treasurymog">
            <Icon icon={UserIcon} />
            <span>Profile</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/notifications">
            <Icon icon={BellIcon} />
            <span>Notifications</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/bookmarks">
            <Icon icon={BookmarkIcon} />
            <span>Bookmarks</span>
          </NavLink>
        </div>
      </BigDiv>
    </EvenBiggerDiv>
  );
};

const EvenBiggerDiv = styled.div`
  float: left;
  height: 80vh;
  margin: 5vh;
  padding-left: 75px;
  svg {
    height: 70px;
  }
`;

const BigDiv = styled.div`
  padding-left: 20px;
  svg {
    height: 40px;
    width: 40px;
  }
  span {
    padding-left: 40px;
  }
  div {
    padding: 15px;
    :hover {
      background-color: #d9b3ff;
      border-radius: 30px;
      cursor: pointer;
    }
  }
  font-size: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  display: block;
  color: black;
  span {
    opacity: 100%;
  }
`;

export default Sidebar;
