import React from "react";
import styled from "styled-components";
import { Github } from "../atoms/icon/Github";
import { Instagram } from "../atoms/icon/Instagram";
import { Twitter } from "../atoms/icon/Twitter";

export const IconList:React.FC = () => {
    return(
        <SIconContainer>
            <Instagram/>
            <Github/>
            <Twitter/>
        </SIconContainer>
    );
};

const SIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80px;
`;