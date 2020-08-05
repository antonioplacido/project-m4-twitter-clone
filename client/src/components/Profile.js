import React, { useEffect } from "react";
import ProfileFeed from "./Tweet/ProfileFeed";
import TopProfile from "./TopProfile";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";
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
        <LoadingWrapper src="https://i.imgur.com/kDDFvUp.png" />
      )}
    </>
  );
};

export default Profile;
