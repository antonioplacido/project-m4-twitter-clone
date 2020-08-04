import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";
import IndActionBar from "./IndActionBar";

const TweetWrapper = styled.div`
  background: white;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  width: 570px;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  width: 65vh;
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

const TweetMedia = styled.img`
  height: 300px;
  width: 570px;
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
`;

const SingleTweetLayout = (props) => {
  const date = moment(props.value.tweet.author.timestamp).format(
    "h:mm a ∙ MMM Do, YYYY"
  );
  const history = useHistory();

  const picture = props.value.tweet.media;
  const catPhotos = picture.map((ele) => ele.url);

  function navigateTweet(e) {
    e.stopPropagation();
    history.push(`/tweet/${props.value.id}`);
  }

  function navigateProfile(e) {
    e.stopPropagation();
    history.push(`/${props.value.tweet.author.handle}`);
  }
  return (
    <TheDiv>
      <EntireDiv>
        <HeadWrapper tabIndex="0" onClick={navigateTweet}>
          <Avatar src={props.value.tweet.author.avatarSrc} />
          <Name onClick={navigateProfile}>
            <DisplayName tabIndex="0">
              {props.value.tweet.author.displayName}
            </DisplayName>
            <Username>@{props.value.tweet.author.handle}</Username>
          </Name>
        </HeadWrapper>
        <TweetWrapper>
          <TweetContents>{props.value.tweet.status}</TweetContents>
          <TweetMedia src={catPhotos} />
          <Timestamp>{date}</Timestamp>
        </TweetWrapper>
      </EntireDiv>
      <Divider />
      <IndActionBar value={props} />
      <Divider />
    </TheDiv>
  );
};

export default SingleTweetLayout;
