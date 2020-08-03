import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";

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

const TweetMedia = styled.img``;

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

const EntireDiv = styled.div`
  margin-left: 470px;
  text-align: left;
`;

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

const TweetStyles = (props) => {
  const history = useHistory();

  function navigateTweet(e) {
    e.stopPropagation();
    history.push(`/tweet/${props.value.id}`);
  }

  function navigateProfile(e) {
    e.stopPropagation();
    history.push(`/${props.value.author.handle}`);
  }
  const date = moment(props.value.timestamp).format("h:mm a ∙ MMM Do, YYYY");
  return (
    <EntireDiv tabIndex="0" onClick={navigateTweet}>
      <HeadWrapper>
        <Avatar src={props.value.author.avatarSrc} />
        <Name onClick={navigateProfile}>
          <DisplayName tabIndex="0">
            {props.value.author.displayName}
          </DisplayName>
          <Username>@{props.value.author.handle}</Username>
        </Name>
      </HeadWrapper>
      <TweetWrapper>
        <TweetContents>{props.value.status}</TweetContents>
        <TweetMedia src={props.value.media.url} />
        <Timestamp>{date}</Timestamp>
        <Divider />
        <StatWrapper>
          <Retweets>
            <b>{props.value.numRetweets}</b> Retweets
          </Retweets>
          <Likes>
            <b>{props.value.numLikes}</b> Likes
          </Likes>
        </StatWrapper>
        <Divider />
        <div>Action Bar goes here</div>
        <Divider />
      </TweetWrapper>
    </EntireDiv>
  );
};

export default TweetStyles;
