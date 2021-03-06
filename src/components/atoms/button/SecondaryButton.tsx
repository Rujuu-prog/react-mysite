import styled from "styled-components";

export const SecondaryButton = (props:any) => {
    const { children } = props;
    return <SButton>{children}</SButton>;
};

const SButton = styled.a`
    color: #fff;
    width: 10%;
    font-size: 14px;
    padding: 5px;
    border-radius: 10000px;
    :hover {
        background-color: #f5f5f5;
        color: #282828;
    }
`;
