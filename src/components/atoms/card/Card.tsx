import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  children?: React.ReactNode;
};

export const Card: React.FC = (props) => {
  const { children } = props;
  return (
    <SCard>
      <span>{children}</span>
    </SCard>
  );
};

const transitionCardWidth = keyframes`
  0% {
    width: calc(95% + 1px);
    clip-path: inset(0 0 0 80%);
  }
  50% {
    clip-path: inset(0 0 0 20%);
  }
  100% {
    clip-path: inset(0 0 0 200%);
  }
`;

const transitionCardHeight = keyframes`
  0% {
    height: calc(95% + 1px);
    clip-path: inset(80% 0 0 0);
  }
  50% {
    clip-path: inset(20% 0 0 0);
  }
  100% {
    clip-path: inset(200% 0 0 0);
  }
`;
const transitionCardWidthB = keyframes`
  0% {
    width: calc(95% + 1px);
    clip-path: inset(0 80% 0 0);
  }
  50% {
    clip-path: inset(0 20% 0 0);
  }
  100% {
    clip-path: inset(0 200% 0 0);
  }
`;

const transitionCardHeightB = keyframes`
  0% {
    height: calc(95% + 1px);
    clip-path: inset(0 0 80% 0);
  }
  50% {
    clip-path: inset(0 0 20% 0);
  }
  100% {
    clip-path: inset(0 0 200% 0);
  }
`;

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 26px 16px 16px 16px;
  position: relative;
  margin: 0;
  :hover {
    opacity: 90%;
  }
  ::after,
  ::before,
  span::before,
  span::after {
    background-color: #f5f5f5;
    content: "";
    display: block;
    position: absolute;
    z-index: 10;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
  }
  ::after {
    width: 0px;
    height: 3px;
    top: -3px;
    left: 6px;
  }
  ::before {
    width: 0px;
    height: 3px;
    right: 6px;
    bottom: -3px;
  }
  span::after {
    width: 3px;
    height: 0px;
    left: -3px;
    bottom: 6px;
  }
  span::before {
    width: 3px;
    height: 0px;
    top: 6px;
    right: -3px;
  }
  :hover::before {
    animation: ${transitionCardWidthB} 2s forwards;
  }
  :hover::after {
    animation: ${transitionCardWidth} 2s forwards;
  }
  :hover span::before {
    animation: ${transitionCardHeight} 2s forwards;
  }
  :hover span::after {
    animation: ${transitionCardHeightB} 2s forwards;
  }
`;
