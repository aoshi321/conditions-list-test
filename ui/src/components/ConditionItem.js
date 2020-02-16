import React from "react";
import styled from "styled-components";

import ConditionImage from "./ConditionImage";
import placeHolderImage from "./placeholder.jpg";

const ConditionItemWrapper = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.33%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const ConditionItemInner = styled.div`
  position: relative;
  background: #ececec;
  margin: 10px;
  padding: 10px;
  height: 300px;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Description = styled.span`
  font-size: 14px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const MoreLink = styled.a`
  margin-top: 10px;
  font-size: 14px;
  color: #1fbed6;
  text-decoration: none;
  display: block;
`;

const ConditionItem = ({
  condition: { label, image = placeHolderImage, snippet }
}) => (
  <ConditionItemWrapper>
    <ConditionItemInner>
      <ConditionImage src={image} fallback={placeHolderImage} />
      <Title>{label}</Title>
      {snippet && <Description>{snippet}</Description>}
      <MoreLink href="#">Find out more</MoreLink>
    </ConditionItemInner>
  </ConditionItemWrapper>
);

export default ConditionItem;
