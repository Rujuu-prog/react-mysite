import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const IconStyle = {
  padding: "2",
  fontsize: "50",
};

export const Twitter: React.FC = () => {
  return (
    <SButton
      href="https://twitter.com/Rujuu2118"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon style={IconStyle} icon={faTwitter}></FontAwesomeIcon>
    </SButton>
  );
};

const SButton = styled.a`
  text-decoration: none;
  color: #fff;
  :hover {
    color: #282828;
  }
`;
