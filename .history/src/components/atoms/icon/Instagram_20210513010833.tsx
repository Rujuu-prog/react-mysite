import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const IconStyle = {
    padding:"2",
    fontsize:"50"
}

export const Instagram:React.FC = () => {
    return(<SButton href='https://www.instagram.com/rujuuuuuu/'><FontAwesomeIcon style={IconStyle} icon={faInstagram}></FontAwesomeIcon></SButton>);
}

const SButton = styled.a`
    text-decoration: none;
    color: #fff;
`;