import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconStyle = {
    padding:"2",
    fontsize:"50"
}

export const Twitter:React.FC = () => {
    return(<FontAwesomeIcon style={IconStyle} icon={faTwitter}></FontAwesomeIcon>);
}