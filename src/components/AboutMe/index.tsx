import React from 'react';

import aboutMe from '../../assets/images/about-me.jpg';

import { Container } from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <div className="aboutme-logo">
        <img src={aboutMe} alt="AboutMe" width="400" height="600" />
      </div>
      <div className="aboutme-description">
        <p>Sou formada em Nutrição pelo Centro Universitário São Camilo e Pós-graduada em Nutrição e Metabolismo esportivo pelo Grupo Minian - GANEP.
          Posso dizer que não fui eu quem escolhi a Nutrição, ela que me escolheu. Minha maior motivação não é apenas auxiliar pessoas a se alimentarem
          melhor e terem hábitos saudáveis, mas sim transformar vidas!
        </p>
        <div>
          <p className="aboutme-phrase">
            “A gente não se liberta de um hábito atirando-o pela janela.
            É preciso fazê-lo descer a escada, degrau por degrau.”
          </p>
          <p>– Mark Twain</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
