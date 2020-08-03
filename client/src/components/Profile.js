import React, { useEffect } from "react";
import TweetProvider from "../components/Tweet/TweetContext";
import styled from "styled-components";
import ProfileFeed from "./Tweet/ProfileFeed";
import TopProfile from "./TopProfile";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";

const Profile = () => {
  const [proBanner, setProBanner] = React.useState(null);
  const [bannerStatus, setBannerStatus] = React.useState("Loading Banner...");
  const [proFeed, setProfileFeed] = React.useState(null);
  const [status, setStatus] = React.useState("Loading Profile please wait...");
  console.log(proBanner);
  console.log(bannerStatus);

  const { handle } = useParams();
  useEffect(() => {
    fetch(`/api/${handle}/profile`)
      .then((res) => res.json())
      .then((profileTopPart) => {
        const profileTopTaker = profileTopPart.profile;
        setProBanner(profileTopTaker);
        setBannerStatus("BannerLoaded");
      });
    fetch(`/api/${handle}/feed`)
      .then((res) => res.json())
      .then((profileData) => {
        setProfileFeed(profileData);
        setStatus("ProfileLoaded");
      });
  }, [handle]);

  return (
    <>
      {status === "ProfileLoaded" && bannerStatus === "BannerLoaded" ? (
        <>
          <TopProfile value={proBanner} />
          {proFeed.tweetIds.map((Feed) => {
            let profData = proFeed.tweetsById[Feed];
            return <ProfileFeed value={profData} />;
          })}
        </>
      ) : (
        <div>
          {bannerStatus},{status}
        </div>
      )}
    </>
  );
};

export default Profile;
