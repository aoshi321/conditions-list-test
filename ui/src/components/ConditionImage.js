import React from "react";
import styled from "styled-components";

import useFallbackImg from "../hooks/useFallbackImg";

const ImgContainer = styled.div`
  width: 100%;
  height: 150px;
`;

const Img = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
  margin: auto;
`;

const CondtitionImage = ({ src, fallback, ...rest }) => {
  const imgProps = useFallbackImg(src, fallback);

  return (
    <ImgContainer>
      <Img {...imgProps} {...rest} />
    </ImgContainer>
  );
};

export default CondtitionImage;
