import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const StyledContainer = styled.div`
  width: calc(100% - 16px);
  height: 400px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 2.8px 2.2px rgba(156, 30, 30, 0.034),
    0 6.7px 5.3px rgba(156, 30, 30, 0.048),
    0 12.5px 10px rgba(156, 30, 30, 0.06),
    0 22.3px 17.9px rgba(156, 30, 30, 0.072),
    0 41.8px 33.4px rgba(156, 30, 30, 0.086),
    0 100px 80px rgba(156, 30, 30, 0.12);

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60%;
    filter: saturate(0%) invert(23%) sepia(11%) saturate(2814%)
      hue-rotate(318deg) brightness(80%) contrast(87%);
  }
  ${media.lessThan("medium")`
    height: 300px;
  `}
  ${media.lessThan("small")`
    height: 250px;
  `}
`;

const Title = styled.h1`
  color: white;
  width: 100%;
  position: absolute;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  font-weight: 800;
  font-size: 72px;
  bottom: 40%;
  left: 50%;
  text-align: center;
  transform: translate(-50%);
  font-family: "Pacifico";
  ${media.between("small", "medium")`
    font-size: 56px;
  `};
  ${media.lessThan("small")`
    font-size: 48px;
  `};
`;

const SubTitle = styled.h2`
  color: white;
  width: 100%;
  position: absolute;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  font-size: 26px;
  bottom: 25%;
  left: 50%;
  padding: 0 16px;
  text-align: center;
  transform: translate(-50%);
  ${media.lessThan("medium")`
    font-size: 20px;
  `};
  ${media.lessThan("small")`
    bottom: 20%;
  `};
`;

export default function Hero() {
  return (
    <StyledContainer>
      <Title>Pod hruškou</Title>
      <SubTitle>Najlepšie pohostinstvo v Braväcove</SubTitle>
    </StyledContainer>
  );
}
