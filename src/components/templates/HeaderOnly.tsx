import React from "react";
import styled from "styled-components";

import { IconList } from "../molecules/IconList";
import { NaviBar } from "../atoms/layout/NaviBar";

type Props = {
  children?: React.ReactNode;
};

export const HeaderOnly: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SHeader>
        {/* <SiteIcon /> */}
        <NaviBar />
        <IconList />
      </SHeader>
      {/* {children} */}
    </>
  );
};

const SHeader = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 50px;
  //   padding: 5px 5px;
`;
