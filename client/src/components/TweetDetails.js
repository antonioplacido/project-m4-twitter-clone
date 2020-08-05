import React, { useEffect } from "react";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";
import SingleTweetLayout from "./Tweet/SingleTweetLayout";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoadingWrapper = styled.img`
  animation: ${rotate} 2s infinite linear;
  width: 100;
  height: 100;
`;

const TweetDetails = () => {
  const [tweetDetails, setTweetDetails] = React.useState(null);
  const [status, setStatus] = React.useState("Loading tweet...");

  console.log(tweetDetails);
  console.log(status);

  const { tweetId } = useParams();

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((individualTweet) => {
        setTweetDetails(individualTweet);
        setStatus("Tweet Loaded");
      })
      .catch((error) => window.location.replace("/error/404"));
  }, []);

  return (
    <>
      {status === "Tweet Loaded" ? (
        <>
          <SingleTweetLayout value={tweetDetails} />
        </>
      ) : (
        <LoadingWrapper src="https://i.imgur.com/kDDFvUp.png" class="rotate" />
      )}
    </>
  );
};

export default TweetDetails;
