import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Wrapper color={color} size={size} />;
};

const scale = keyframes`
    from{
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const fade = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0
    }
`;

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: blue;
  height: 150%;
  width: 150%;
  animation: ${scale} 400ms forwards, ${fade} 500ms forwards;
`;
//rip the code from the class example XD

export default PoppingCircle;
