import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { messageSquare } from "react-icons-kit/feather/messageSquare";
import { repeat } from "react-icons-kit/feather/repeat";
import { heart } from "react-icons-kit/feather/heart";
import { upload } from "react-icons-kit/feather/upload";

const ActionBar = (props) => {
  console.log(props);
  const [likes, setLikes] = useState(props.value.value.numLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [retweets, setRetweets] = useState(props.value.value.numRetweets);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const handleToggleLiked = () => {
    const fetchdata = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like: !isLiked }),
    };
    isLiked
      ? fetch(`/api/tweet/${props.value.value.id}/like`, fetchdata)
          .then((response) => response.json())
          .then(setLikes(likes - 1))
      : fetch(`/api/tweet/${props.value.value.id}/like`, fetchdata)
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
        <b>{retweets}</b> Retweets
      </NumStats>
      <NumStats>
        <b>{likes}</b> Likes
      </NumStats>
      <ActionBarIcons>
        <Icon icon={messageSquare} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={repeat} onClick={handleToggleRetweet} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={heart} onClick={handleToggleLiked} />
      </ActionBarIcons>
      <ActionBarIcons>
        <Icon icon={upload} />
      </ActionBarIcons>
    </DivDiv>
  );
};
const NumStats = styled.div`
  margin-right: 20px;
`;
const DivDiv = styled.div`
  /* we heard you liek divs so we put a div in your div to div your div */
  display: flex;
  justify-content: space space-evenly;
  padding-bottom: 15px;
  /* border-bottom: solid 1px coral; */
  margin-top: 10px;
`;
const ActionBarIcons = styled.button`
  display: block;
  margin-left: 30px;
  padding-left: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  svg {
    width: 20px;
    height: 20px;
    color: purple;
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

export default ActionBar;
