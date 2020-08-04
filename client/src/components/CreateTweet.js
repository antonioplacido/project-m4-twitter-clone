import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import TweetStyles from "./Tweet/TweetStyles";

const CreateTweet = ({ setTweetFeed, tweetFeed }) => {
  const [tweetTarget, setTweetTarget] = React.useState();
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
          .then((res) => res.JSON())
          .then((data) => {
            setTweetFeed(data);
          });
      });
  }
  return (
    <InputBox>
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
      <Button onClick={() => postTarget(tweetTarget)}>
        <i>Meow?</i>
      </Button>
    </InputBox>
  );
};

const InputBox = styled.div``;

const Input = styled.input`
  width: 48vh;
`;

const Button = styled.button``;
export default CreateTweet;
