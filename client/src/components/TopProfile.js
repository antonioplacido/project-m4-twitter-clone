import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import { Icon } from "react-icons-kit";
import { location2 } from "react-icons-kit/icomoon/location2";
import { calendar } from "react-icons-kit/icomoon/calendar";

const ProfileBanner = styled.img`
  height: 31vh;
`;

const TopPart = styled.div``;

const TheText = styled.div`
  position: absolute;
  top: 225px;
  display: inline-block;
`;

const Profile = styled.div`
  width: 93vh;
  padding-top: 20px;
  font-size: 20px;
`;

const IsFollow = styled.span``;

const BannerDiv = styled.div``;

const Handle = styled.span`
  font-size: 20px;
  line-height: 20px;
  color: rgb(101, 119, 134);
  display: flex;
  padding-top: 15px;
`;

const ProfilePicture = styled.img`
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  border: 4px solid white;
  margin-left: 20px;
`;

const DisplayName = styled.span`
  font-size: 25px;
  line-height: 20px;
  font-weight: bold;
  display: flex;
  padding-top: 15px;
`;
const LocationAndJoined = styled.div`
  font-size: 20px;
  padding-top: 15px;
  color: gray;
  display: flex;
  justify-content: space-between;
`;

const Location = styled.span``;

const Joined = styled.span``;

const Stats = styled.div`
  padding-top: 15px;
  font-size: 20px;
`;

const TweetAndMedia = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Following = styled.span``;

const Divider = styled.div`
  height: 1px;
  padding: 15px 0px;
`;

const TopProfile = (props) => {
  const date = moment(props.value.joined).format("MMMM YYYY");
  return (
    <TopPart>
      <BannerDiv>
        <ProfileBanner src={props.value.bannerSrc}></ProfileBanner>
      </BannerDiv>
      <TheText>
        <ProfilePicture src={props.value.avatarSrc} />
        <DisplayName>{props.value.displayName}</DisplayName>
        <Handle>@{props.value.handle}</Handle>
        <Profile>{props.value.bio}</Profile>
        <LocationAndJoined>
          <Location>
            <Icon icon={location2} />
            <span> {props.value.location} </span>
            <Icon icon={calendar} />
            <span> Joined {date}</span>
          </Location>
        </LocationAndJoined>

        <Stats>
          <Following>
            <b>{props.value.numFollowing}</b> Following{" "}
            <b>{props.value.numFollowers}</b> Followers
          </Following>
          <Divider />
          <TweetAndMedia>
            <span>Tweets</span>
            <span>Media</span>
            <span>Likes</span>
          </TweetAndMedia>
        </Stats>
        <Divider />
      </TheText>
    </TopPart>
  );
};

export default TopProfile;
