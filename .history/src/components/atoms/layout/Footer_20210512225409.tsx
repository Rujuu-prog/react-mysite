import styled from "styled-components";

export const Footer = () => {
    return <SFooter><Sp>advice orina</Sp></SFooter>;
};

const SFooter = styled.footer`
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    // height: 10%;
`;

const Sp = styled.p`
    margin: 0;
`;