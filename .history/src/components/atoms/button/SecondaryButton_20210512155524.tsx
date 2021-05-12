import styled from "styled-components";

export const SecondaryButton = (props:any) => {
    const { children } = props;
    return <SButton>{children}</SButton>;
};

const SButton = styled.a`
    background-color: gray;
    width: 10%;
    font-size: 10px;
    padding: 5px;
`;
