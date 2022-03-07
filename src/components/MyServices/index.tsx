import React from 'react';

import { Container } from './styles';

import nutriSport from '../../assets/images/nutri-sport.svg';
import nutriSlimmingHyper from '../../assets/images/nutri-slimming-hypertrophy.svg';
import nutriHalth from '../../assets/images/nutri-health.svg';

const MyServices: React.FC = () => {
  return (
    <Container>
      <div className='cards'>

        <div className="card nutri-sport">
          <img src={nutriSport} alt="Avatar" />
          <div className="container card-nutri-sport">
            <h3><b>Nutrição para o esporte</b></h3>
            <p>Melhora de desempenho esportivo, rendimento durante treinos, reforço na recuperação pós-treino e provas.</p>
            <br />
          </div>
          <p><button>Performance</button></p>
        </div>

        <div className="card nutri-slimming-hypertrophy">
          <img src={nutriSlimmingHyper} alt="Avatar" />
          <div className="container card-nutri-slimming-hypertrophy">
            <h3><b>Nutrição para a estética</b></h3>
            <p>Plano alimentar para mudanças na composição corporal como emagrecimento e hipertrofia.</p>
            <br />
          </div>
          <p><button>Emagrecimento | Hipertrofia</button></p>
        </div>

        <div className="card nutri-health">
          <img src={nutriHalth} alt="Avatar" />
          <div className="container card-nutri-health">
            <h3><b>Nutrição para a saúde</b></h3>
            <p>Reeducação alimentar para prevenção ou tratamento de doenças ou fatores de risco.</p>
            <br />
          </div>
          <p><button>Longevidade</button></p>
        </div>
      </div>

      <div className='doubt'>
        <p>
          <span>
            Dúvidas? Fale comigo
            <span> </span>
            <strong>
              <a href="https://api.whatsapp.com/send?phone=5511910955929" target="_blank" rel="noreferrer">VIA WHATSAPP →</a>
            </strong>
          </span>
        </p>
      </div>
    </Container>
  );
};

export default MyServices;
