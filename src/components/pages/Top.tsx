import React from "react";
import styled from "styled-components";
import me from "../atoms/img/me.svg";

import Lottie from "react-lottie";
import animationData from "../atoms/img/data.json";

export const Top: React.FC = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <SMainContainer>
      <SContents>
        <div className="ani">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </SContents>
      <SImgContainer>
        <img src={me} alt="me" />
      </SImgContainer>
    </SMainContainer>
  );
};

const SMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
`;

const SContents = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ani {
    position: relative;
  }
  .ani:before {
    content: "Rujuu's";
    position: absolute;
    top: 190px;
    left: 170px;
    font-size: 50px;
    font-weight: 600;
  }
  .ani:after {
    content: "Portfolio";
    position: absolute;
    top: 260px;
    left: 195px;
    color: #282828;
    font-size: 30px;
    font-weight: 500;
  }
`;

const SImgContainer = styled.div`
  width: 50%;
  img {
    height: 90vh;
    width: 100%;
    object-fit: cover;
  }
`;
