import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";

const IndActionBar = (props) => {
  console.log(props);
  const [likes, setLikes] = useState(props.value.value.tweet.numLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [retweets, setRetweets] = useState(props.value.value.tweet.numRetweets);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const handleToggleLiked = () => {
    const fetchdata = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like: !isLiked }),
    };
    isLiked
      ? fetch(`/api/tweet/${props.value.value.tweet.id}/like`, fetchdata)
          .then((response) => response.json())
          .then(setLikes(likes - 1))
      : fetch(`/api/tweet/${props.value.value.tweet.id}/like`, fetchdata)
          .then((response) => response.json())
          .then(setLikes(likes + 1));
    setIsLiked(!isLiked);
  };
  const handleToggleRetweet = () => {
    const fetchretweet = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retweet: !isRetweeted }),
    };
    isRetweeted
      ? fetch(`/api/tweet/${props.value.value.id}/retweet`, fetchretweet)
          .then((response) => response.json())
          .then(setRetweets(retweets - 1))
      : fetch(`/api/tweet/${props.value.value.id}/retweet`, fetchretweet)
          .then((response) => response.json())
          .then(setRetweets(retweets + 1));
    setIsRetweeted(!isRetweeted);
  };
  return (
    <DivDiv>
      <NumStats>
        <b>{retweets}</b> Retweets <b>{likes}</b> Likes
      </NumStats>
      <Divider />
      <ActionBarIcons>
        <Icon icon={messageSquare} />
        <Icon icon={repeat} onClick={handleToggleRetweet} />
        <Icon icon={heart} onClick={handleToggleLiked} />
        <Icon icon={upload} />
      </ActionBarIcons>
    </DivDiv>
  );
};

const NumStats = styled.div`
  margin-right: 20px;
  padding-bottom: 15px;
`;
const DivDiv = styled.div`
  justify-content: space-evenly;
  padding-bottom: 15px;
  margin-top: 10px;
`;
const ActionBarIcons = styled.button`
  display: flex;
  background: transparent;
  border-right-style: hidden;
  border-top-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  cursor: pointer;
  text-align: left;
  svg {
    display: flex;
    justify-content: space-between;
    width: 15vh;
    height: 20px;
  }
  &:active {
    color: inherit;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
  width: 65vh;
`;

export default IndActionBar;
