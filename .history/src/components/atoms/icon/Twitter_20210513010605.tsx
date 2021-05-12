import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";

const IconStyle = {
    padding:"2",
    fontsize:"50"
}

export const Twitter:React.FC = () => {
    return(<SButton href='https://twitter.com/Rujuu2118'><FontAwesomeIcon style={IconStyle} icon={faTwitter}></FontAwesomeIcon>);</SButton>
}

const SButton = styled.a`
    text-decoration: none;
    color: #fff;
`;