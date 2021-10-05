import React from "react";
import styled from "styled-components";

export const Philosophy: React.FC = () => {
  return (
    <SMainContainer>
      <h1>Philosophy</h1>
      <p>「ITを通じて、社会の発展を加速させる」</p>
      <p>これが私の人生の目的です。</p>
      <SP>
        幼少期からドラえもんの22世紀の光景が好きで、早く世の中に空飛ぶ車やどこでもドアが生み出されないかと心踊らせていました。
        <br />
        しかし人生経験を積むにつれ、自分が生きているうちにドラえもんの世界はお目にかかれないだろうなと気づいてしまいました。
        <br />
        更に残念なことに、私には天才的な頭脳があるわけでも、ひたすら努力を続けることができる人間でもありませんでした...。
        <br />
        ですが、大学に入学してプログラミングに出会ったことで、これを使って世の中の優秀な方々のサポートをできるようになれば、技術の発展速度が上がり22世紀のような世界を見ることができるのではないかと考えました。
        <br />
        現在はアルバイト先で社内業務の効率化を行うシステム開発をしている身ですが、今後は更に広く社会全体の役に立てるようなシステムを作っていきたいと考えています。
      </SP>
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
`;

const SP = styled.p`
  width: 40%;
  line-height: 30px;
  text-align: left;
`;
