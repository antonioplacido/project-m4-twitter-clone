import React from "react";
import styled from "styled-components";
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import Icon from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/feather/arrowLeft";
const BombsAway = () => {
  return (
    <div>
      <Bomber>
        <Icon icon={bomb} size={200} />
      </Bomber>
      <p>
        95% of the time, it works{" "}
        <i>
          <b>
            <u>all the time</u>
          </b>
        </i>{" "}
      </p>
      <Icon icon={arrowLeft} size={150} />
      <span>Click here</span>
    </div>
  );
};
const Bomber = styled.div`
  svg {
    color: midnightblue;
    left: 75vh;
  }
`;
export default BombsAway;
