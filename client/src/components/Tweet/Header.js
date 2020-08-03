import React, { useContext } from "react";
import styled from "styled-components";
import { TweetContext } from "../Tweet/TweetContext";

const Header = () => {
  const { avatarSrc, displayName, username } = useContext(TweetContext);
  return (
    <Wrapper>
      <Avatar src={avatarSrc} />
      <Name>
        <DisplayName>{displayName}</DisplayName>
        <Username>@{username}</Username>
      </Name>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

export default Header;
