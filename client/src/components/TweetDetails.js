import React, { useEffect } from "react";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";
import SingleTweetLayout from "./Tweet/SingleTweetLayout";

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
      });
  }, []);

  return (
    <>
      {status === "Tweet Loaded" ? (
        <>
          <SingleTweetLayout value={tweetDetails} />
        </>
      ) : (
        <div>{status}</div>
      )}
    </>
  );
};

export default TweetDetails;
