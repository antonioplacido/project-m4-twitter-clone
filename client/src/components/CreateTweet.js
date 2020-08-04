import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTweet from "./CreateTweet";
import styled from "styled-components";
import TweetStyles from "./Tweet/TweetStyles";

const CreateTweet = ({ setTweetFeed, tweetFeed }) => {
  const [target, setTarget] = React.useState();
  const entry = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: target }),
  };
  function postTarget(param) {
    fetch("/api/tweet", entry)
      .then((res) => res.json())
      .then((data) => {
        fetch("/api/me/home-feed")
          .then((res) => resj.JSON())
          .then((data) => {
            setTweetFeed(data);
          });
      });
  }
  return (
    <InputBox>
      <Input
        type="text"
        value={target}
        onChange={(ev) => setTarget(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              postTarget(target);
              return;
            }
          }
        }}
      ></Input>
    </InputBox>
  );
};

export default CreateTweet;
