import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props:any) => {
    const { children } = props;
    return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
    background-color: gray;
    width: 10%;
    font-size: 5px;
`;
