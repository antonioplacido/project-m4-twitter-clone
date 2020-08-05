import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import TweetStyles from "./Tweet/TweetStyles";

const CreateTweet = ({ setTweetFeed, tweetFeed }) => {
  const [tweetTarget, setTweetTarget] = React.useState("");
  const entry = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: tweetTarget }),
  };
  function postTarget(param) {
    fetch("/api/tweet", entry)
      .then((res) => res.json())
      .then((data) => {
        fetch("/api/me/home-feed")
          .then((res) => res.json())
          .then((data) => {
            setTweetFeed(data);
          });
      });
  }
  return (
    <InputBox>
      {280 - tweetTarget.length > 150 ? (
        <Green>{280 - tweetTarget.length}</Green>
      ) : 280 - tweetTarget.length > 50 ? (
        <Orange>{280 - tweetTarget.length}</Orange>
      ) : 280 - tweetTarget.length >= 0 ? (
        <Red>{280 - tweetTarget.length}</Red>
      ) : (
        <Red></Red>
      )}
      <Input
        type="text"
        value={tweetTarget}
        onChange={(ev) => setTweetTarget(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              postTarget(tweetTarget);
              return;
            }
          }
        }}
      />
      <Button
        disabled={tweetTarget.length > 280}
        onClick={() => postTarget(tweetTarget)}
      >
        <i>Meow?</i>
      </Button>
    </InputBox>
  );
};

const InputBox = styled.div``;

const Input = styled.input`
  width: 48vh;
`;

const Red = styled.div`
  color: red;
  border: black;
`;

const Green = styled.div`
  color: green;
`;

const Orange = styled.div`
  color: orange;
`;

const Button = styled.button``;
export default CreateTweet;
