import styled from "styled-components";

export const SecondaryButton = (props:any) => {
    const { children } = props;
    return <SButton>{children}</SButton>;
};

const SButton = styled.a`
    color: #fff;
    width: 10%;
    height: 100%;
    font-size: 14px;
    padding: 5px;
    :hover {
        background-color: #f5f5f5;
    }
`;
