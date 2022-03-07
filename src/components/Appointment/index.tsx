import React from 'react';

import { Container } from './styles';

const Appointment: React.FC = () => {

  return (
    <Container>
      <div className='description'>
        <p>A consulta tem duração de aproximadamente 1:30h, online ou presencial, e começa antes mesmo do seu atendimento.</p>
        <p>No final da consulta, todo material será entregue por e-mail e você terá acesso a um aplicativo exclusivo para auxilia-lo.</p>
      </div>
      <div className='row'>
        <div className='col col1'>
          <h1>Presencial</h1>
          <div className='row2'>
            <p>
              <span>1</span>
              <p className='title'>Pré-Consulta</p>
              <p className='content'>Agende sua consulta via whatsapp. Preencha o formulário pré-consulta e leia do manual de boas vindas.</p>
            </p>
            <p>
              <span>2</span>
              <p className='title'>Primeira conversa</p>
              <p className='content'>Vamos conversar sobre sua rotina, preferências alimentares, atividade física praticada e saúde.</p>
            </p>
            <p>
              <span>3</span>
              <p className='title'>Avaliação Corporal</p>
              <p className='content'>Avaliação corporal por adipometria, com peso, circuferências e porcentagem de gordura.</p>
            </p>
            <p>
              <span>4</span>
              <p className='title'>Elaboração do cardápio</p>
              <p className='content'>Montaremos juntos um planejamento alimentar totalmente individualizado.</p>
            </p>
          </div>
        </div>
        <div className='col col2'>
          <h1>Online</h1>
          <div className='row2'>
            <p>
              <span>1</span>
              <p className='title'>Pré-Consulta</p>
              <p className='content'>Agende sua consulta via whatsapp. Preencha o formulário pré-consulta e leia do manual de boas vindas.</p>
            </p>
            <p>
              <span>2</span>
              <p className='title'>Medidas e fotos</p>
              <p className='content'>Tire suas medidas e fotos de acordo com o manual enviado por e-mail após o agendamento.</p>
            </p>
            <p>
              <span>3</span>
              <p className='title'>Primeira conversa</p>
              <p className='content'>Vamos conversar sobre sua rotina, preferências alimentares, atividade física praticada e saúde.</p>
            </p>
            <p>
              <span>4</span>
              <p className='title'>Elaboração do cardápio</p>
              <p className='content'>Montaremos juntos um planejamento alimentar totalmente individualizado.</p>
            </p>
          </div>
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

export default Appointment;
