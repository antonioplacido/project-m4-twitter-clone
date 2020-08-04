import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";
import ActionBar from "./ActionBar";

const TweetWrapper = styled.div`
  background: white;
  width: 580px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
  width: 65vh;
`;

const HeadWrapper = styled.header`
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

const EntireDiv = styled.div``;

const StatWrapper = styled.div`
  div {
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
  }
  display: flex;
  align-items: center;
  height: 48px;
`;
const Retweets = styled.div`
  color: black;
`;
const Likes = styled.div``;

const TheDiv = styled.div`
  margin-left: 470px;
  text-align: left;
  position: relative;
  top: 400px;
`;

const ProfileFeed = (props) => {
  const date = moment(props.value.timestamp).format("h:mm a ∙ MMM Do, YYYY");
  const history = useHistory();

  function navigateTweet(e) {
    e.stopPropagation();
    history.push(`/tweet/${props.value.id}`);
  }

  function navigateProfile(e) {
    e.stopPropagation();
    history.push(`/${props.value.author.handle}`);
  }
  return (
    <TheDiv>
      <EntireDiv tabIndex="0" onClick={navigateTweet}>
        <HeadWrapper>
          <Avatar src={props.value.author.avatarSrc}></Avatar>
          <Name onClick={navigateProfile}>
            <DisplayName tabIndex="0">
              {props.value.author.displayName}
            </DisplayName>
            <Username>@{props.value.author.handle}</Username>
          </Name>
        </HeadWrapper>
        <TweetWrapper>
          <TweetContents>{props.value.status}</TweetContents>
          <Timestamp>{date}</Timestamp>
        </TweetWrapper>
      </EntireDiv>
      <Divider />
      <ActionBar value={props}></ActionBar>
      <Divider />
    </TheDiv>
  );
};
export default ProfileFeed;
