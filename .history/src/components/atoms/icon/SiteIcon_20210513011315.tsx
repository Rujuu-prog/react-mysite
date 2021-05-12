import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IconStyle = {
    padding:"2",
    fontsize:"50"
}

export const SiteIcon:React.FC = () => {
    return(<SLink to="/"><FontAwesomeIcon style={IconStyle} icon={faCircleNotch}></FontAwesomeIcon></SLink>);
}

const SLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;