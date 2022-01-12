import React from 'react';

import { Container } from './styles';

import consultaPresencial from '../../assets/images/consulta-presencial.jpeg';
import consultaPresencial2 from '../../assets/images/consulta-presencial2.jpeg';
import consultaOnline from '../../assets/images/consulta-online.jpeg';
import consultaOnline2 from '../../assets/images/consulta-online2.jpeg';

const Appointment: React.FC = () => {

  return (
    <Container>
      <div className='container'>
        <img className='consultaPresencial' src={consultaPresencial} alt="ConsultaPresencial" />
        <img className='consultaOnline' src={consultaOnline} alt="ConsultaOnline" />
      </div>
    </Container>
  );
};

export default Appointment;
