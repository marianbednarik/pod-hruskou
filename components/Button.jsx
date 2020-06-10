import React from "react";
import styled, { css } from "styled-components";

const StyleButton = styled.button`
  /* padding: 0px 14px; */
  height: 32px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 4px;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.colors.fgPrimary};
  box-shadow: 0 4px 6px rgba(100, 32, 48, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
  &:hover {
    box-shadow: 0 7px 14px rgba(100, 32, 48, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
  &:active {
    box-shadow: 0 6px 12px -2px rgba(100, 32, 48, 0.25),
      0 3px 7px -3px rgba(0, 0, 0, 0.3);
    transform: translateY(1px);
  }
  ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return css`
          background: linear-gradient(
            135deg,
            ${theme.colors.primary} 0%,
            ${theme.colors.darkAccent} 100%
          );
          color: ${theme.colors.bgPrimary};
        `;
      case "link":
        return css`
          background: none;
          box-shadow: none;
          &:hover {
            box-shadow: none;
            transform: none;
          }
        `;
      default:
        break;
    }
  }}
`;

export default function Button(props) {
  return <StyleButton {...props}>{props.children}</StyleButton>;
}
