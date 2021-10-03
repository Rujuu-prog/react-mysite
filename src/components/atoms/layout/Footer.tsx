import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <SFooter>
      {/* <Sp>advice orina.</Sp> */}
      <SCopy>&copy; 2021 Rujuu</SCopy>
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Sp = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

const SCopy = styled.p`
  color: #fff;
  font-size: 14px;
  margin: 0;
`;
