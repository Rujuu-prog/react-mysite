import React from "react";
import styled from "styled-components";

import me from "../atoms/img/me.svg";

export const SelfIntroduction: React.FC = () => {
  const calcAge = (birthdate: number) => {
    var today = new Date();
    const targetdate =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate();
    return Math.floor((targetdate - birthdate) / 10000);
  };
  return (
    <SMainContainer>
      <SInfo>
        <h1>Self introduction</h1>
        <img src={me} alt="me" />
        <h2>Rujuu</h2>
        <h3>Age: {calcAge(20000118)}</h3>
      </SInfo>
      <SMainText>
        Rujuu(るじゅう)と申します。
        <br />
        PCには殆ど触れずに大学生になったのですが、ゲームをしようと思い自作PCに手を出してしまったがために、プログラミングの虜になってしまいました。
        <br />
        普段はバックエンドにDjangoを、フロントエンドにReactを使いながら、WEBアプリやWEBサイトを作成しています。
        <br />
        その他にもGitやDocker、Postgresqlも多少使っております。
        <br />
        興味を持っていただけましたら、サイト右上のGitHubアイコンから私の活動を覗いていただけると幸いです。
      </SMainText>
    </SMainContainer>
  );
};

const SMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 83px);
  h1 {
    color: #282828;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: solid 5px #282828;
    background-position: left top;
  }
  h2 {
    color: #282828;
    margin: 10px 0 5px 0;
  }
  h3 {
    color: #282828;
    margin: 0;
  }
`;

const SInfo = styled.div`
  margin-bottom: 10px;
`;

const SMainText = styled.p`
  width: 40%;
  line-height: 30px;
  text-align: left;
`;
