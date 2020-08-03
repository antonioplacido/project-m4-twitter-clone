import React, { useContext } from "react";
import { TweetContext } from "./TweetContext";
import styled from "styled-components";

const Stat = () => {
  const { numOfLikes, numOfRetweets } = useContext(TweetContext);
  return (
    <>
      <StatWrapper>
        <Retweets>
          <b>{numOfRetweets}</b> Retweets
        </Retweets>
        <Likes>
          <b>{numOfLikes}</b> Likes
        </Likes>
      </StatWrapper>
    </>
  );
};

export default Stat;

const StatWrapper = styled.div`
  div {
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  display: flex;
  align-items: center;
  height: 48px;
`;
const Retweets = styled.div`
  color: black;
`;
const Likes = styled.div``;
