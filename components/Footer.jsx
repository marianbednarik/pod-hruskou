import React from "react";
import styled from "styled-components";
import Container from "./Container";

const LayoutContainer = styled(Container)`
  height: 64px;
  padding: 0;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const ContentContainer = styled(Container)`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  text-align: center;
  margin: 0 auto;
  display: block;
  padding-top: 8px;
  font-size: 30px;
  font-weight: 700;
  font-family: "Pacifico", sans-serif;
  color: white;
`;

export default function Footer() {
  return (
    <LayoutContainer fluid>
      <Logo>Pod Hruškou</Logo>
    </LayoutContainer>
  );
}
