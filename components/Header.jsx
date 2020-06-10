import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";
import Link from "next/link";
import media from "styled-media-query";
import Navigation from "./Navigation";

const HeaderContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 64px;
  ${media.lessThan("small")`
    flex-direction: column;
    justify-content: flex-start;
    height: 96px;
  `};
`;

const Logo = styled.a`
  grid-area: logo;
  text-align: center;
  display: inline-block;
  font-size: 33px;
  font-weight: 700;
  text-decoration: none;
  font-family: "Pacifico", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Header(props) {
  return (
    <HeaderContainer fluid>
      <Link href="/" passHref>
        <Logo>Pod Hruškou</Logo>
      </Link>
      <Navigation onClick={props.onClick} />
    </HeaderContainer>
  );
}
