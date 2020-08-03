import React, { useEffect } from "react";
import TweetProvider from "../components/Tweet/TweetContext";
import styled from "styled-components";
import ProfileFeed from "./Tweet/ProfileFeed";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";

const Profile = () => {
  const [proBanner, setProBanner] = React.useState(
    "Loading Banner please wait..."
  );
  const [bannerStatus, setBannerStatus] = React.useState(null);
  const [proFeed, setProfileFeed] = React.useState(null);
  const [status, setStatus] = React.useState("Loading Profile please wait...");

  console.log(proBanner.profile);

  const { handle } = useParams();
  useEffect(() => {
    fetch(`/api/${handle}/profile`)
      .then((res) => res.json())
      .then((profileTopPart) => {
        setProBanner(profileTopPart);
        setBannerStatus("BannerLoaded");
      });
  }, []);

  useEffect(() => {
    fetch(`/api/${handle}/feed`)
      .then((res) => res.json())
      .then((profileData) => {
        setProfileFeed(profileData);
        setStatus("ProfileLoaded");
      });
  }, []);

  return (
    <>
      {status === "ProfileLoaded" && bannerStatus === "BannerLoaded" ? (
        <>
          {proFeed.tweetIds.map((Feed) => {
            let profData = proFeed.tweetsById[Feed];
            return <ProfileFeed value={profData} />;
          })}
        </>
      ) : (
        <div>{status}</div>
      )}
    </>
  );
};

export default Profile;
