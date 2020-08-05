import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTweet from "./CreateTweet";
import styled, { keyframes } from "styled-components";
import TweetStyles from "./Tweet/TweetStyles";

const HomeFeedPage = styled.div`
  display: flex;
  align-items: top;
  height: 100vh;
  background: #eee;
`;

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

// DONT TOUCH BELOW //
const Homefeed = () => {
  const [tweetFeed, setTweetFeed] = React.useState(null);
  const [status, setStatus] = React.useState("Loading Homepage please wait...");
  console.log(status);
  console.log(tweetFeed);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweetFeed(data);
        setStatus("Feed");
      });
  }, []);
  return (
    <>
      {status === "Feed" ? (
        <>
          <CreateTweet
            tweetFeed={tweetFeed}
            setTweetFeed={setTweetFeed}
          ></CreateTweet>
          {tweetFeed.tweetIds.map((Feed) => {
            let Tweet = tweetFeed.tweetsById[Feed];
            console.log(Tweet);
            return <TweetStyles value={Tweet} />;
          })}
        </>
      ) : (
        <LoadingWrapper src="https://i.imgur.com/kDDFvUp.png" class="rotate" />
      )}
    </>
  );
};
export default Homefeed;
