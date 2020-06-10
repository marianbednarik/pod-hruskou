import React from "react";
import styled from "styled-components";
import Button from "./Button";

const LinkContainer = styled.nav`
  grid-area: nav;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-around;
`;

export default function Navigation(props) {
  return (
    <LinkContainer>
      <Button type="link" onClick={() => props.onClick("about")}>
        o nás
      </Button>
      <Button type="link" onClick={() => props.onClick("menu")}>
        menu
      </Button>
      <Button type="link" onClick={() => props.onClick("contact")}>
        kontakt
      </Button>
    </LinkContainer>
  );
}
