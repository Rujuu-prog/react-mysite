import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SecondaryButton } from "../button/SecondaryButton";
import { SiteIcon } from "../../atoms/icon/SiteIcon";

type Props = {
  children?: React.ReactNode;
};

export const NaviBar: React.FC<Props> = ({ children }) => {
  return (
    <SContainer>
      <SNavi>
        <SiteIcon />
        <li>
          <SLink to="/selfintroduction">
            <SecondaryButton>Self introduction</SecondaryButton>
          </SLink>
        </li>
        <li>
          <SLink to="/philosophy">
            <SecondaryButton>Philosophy</SecondaryButton>
          </SLink>
        </li>
        <Slist>
          <SLink to="/products">
            <SecondaryButton>Products</SecondaryButton>
          </SLink>
        </Slist>
        {/* <li>
          <IconList />
        </li> */}
      </SNavi>
      {/* <IconList /> */}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
`;

const SNavi = styled.ul`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  // background-color: black;
  list-style: none;
  color: #fff;
  text-align: center;
  padding-left: 20px;
`;

const Slist = styled.li`
  // margin-right: 50%;
`;

const SLink = styled(Link)`
  margin: 0 8px;
  text-decoration: none;
`;
