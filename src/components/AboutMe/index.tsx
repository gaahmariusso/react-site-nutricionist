import React from 'react';

import aboutMe from '../../assets/images/about-me.jpg';
import instagramImage from '../../assets/images/instagram.png';
import facebookImage from '../../assets/images/facebook.png';

import { Container } from './styles';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <div className="aboutme-logo">
        <img className="imagePrincipal" src={aboutMe} alt="AboutMe" width="400" height="600" />
      </div>
      <div className='aboutme-container'>
        <div className='aboutme-title'>
          <p>Prazer, meu nome é Marina Marocci.</p>
        </div>
        <div className="aboutme-description">
          {/* <p>Sou formada em Nutrição pelo Centro Universitário São Camilo e Pós-graduada em Nutrição e Metabolismo esportivo pelo Grupo Minian - GANEP.
            Posso dizer que não fui eu quem escolhi a Nutrição, ela que me escolheu. Minha maior motivação não é apenas auxiliar pessoas a se alimentarem
            melhor e terem hábitos saudáveis, mas sim transformar vidas!
          </p> */}
          <p>
            Posso dizer que não fui eu quem escolhi a Nutrição, ela que me escolheu. Minha maior motivação não é apenas auxiliar pessoas a se alimentarem
            melhor e terem hábitos saudáveis, mas sim transformar vidas!
          </p>
        </div>
        <div className="aboutme-phrase">
          <p>
            “Que seu alimento seja o seu remédio e que o seu remédio seja seu alimento.”
          </p>
        </div>
        <div className="aboutme-formation">
          <p>Formação Acadêmica:</p>
          <p>1. Graduação em Nutrição (Centro Universitário São Camilo) - </p>
          <p>2. Pós graduada em Nutrição e Metabolismo Esportivo (Ganep) - </p>
          <p>3. Curso de Modulação Intestinal (Murilo Pereira) - </p>
        </div>
        <div className="social-icons">
          <div className='facebook-icon'>
            <a href="https://www.facebook.com/marinamarocci.nutri" target="_blank" rel="noreferrer">
              <img src={facebookImage} alt="whatsapp" width="50" height="50" />
            </a>
            <a href="https://www.facebook.com/marinamarocci.nutri" target="_blank" rel="noreferrer">
              Seguir
            </a>
          </div>
          <div className='insta-icon'>
            <a href="https://www.instagram.com/mamarocci.nutri/" target="_blank" rel="noreferrer">
              <img src={instagramImage} alt="whatsapp" width="50" height="50" />
            </a>
            <a href="https://www.instagram.com/mamarocci.nutri/" target="_blank" rel="noreferrer">
              Seguir
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
