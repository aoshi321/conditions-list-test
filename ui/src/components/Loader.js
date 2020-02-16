import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: opacity 0.3s linear;
`;

const Loader = () => (
  <LoaderWrapper>
    <svg
      width="200"
      height="200"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{ background: "0 0" }}
    >
      <circle
        cx="50"
        cy="50"
        r="4.719"
        fill="none"
        stroke="#1d3f72"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          values="0;40"
          keyTimes="0;1"
          dur="3"
          keySplines="0 0.2 0.8 1"
          begin="-1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          values="1;0"
          keyTimes="0;1"
          dur="3"
          keySplines="0.2 0 0.8 1"
          begin="-1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="27.591"
        fill="none"
        stroke="#5699d2"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          values="0;40"
          keyTimes="0;1"
          dur="3"
          keySplines="0 0.2 0.8 1"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          values="1;0"
          keyTimes="0;1"
          dur="3"
          keySplines="0.2 0 0.8 1"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </LoaderWrapper>
);

export default Loader;
