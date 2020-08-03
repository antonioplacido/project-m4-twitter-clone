import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";

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

const SingleTweetLayout = (props) => {
  const date = moment(props.value.tweet.author.timestamp).format(
    "h:mm a ∙ MMM Do, YYYY"
  );
  return (
    <EntireDiv>
      <HeadWrapper>
        <Avatar src={props.value.tweet.author.avatarSrc} />
        <Name>
          <DisplayName>{props.value.tweet.author.displayName}</DisplayName>
          <Username>@{props.value.tweet.author.handle}</Username>
        </Name>
      </HeadWrapper>
      <TweetWrapper>
        <TweetContents>{props.value.tweet.status}</TweetContents>
        <Timestamp>{date}</Timestamp>
        <Divider />
        <StatWrapper>
          <Retweets>
            <b>{props.value.tweet.numRetweets}</b> Retweets
          </Retweets>
          <Likes>
            <b>{props.value.tweet.numLikes}</b> Likes
          </Likes>
        </StatWrapper>
        <Divider />
        <div>Action Bar goes here</div>
        <Divider />
      </TweetWrapper>
    </EntireDiv>
  );
};

export default SingleTweetLayout;
