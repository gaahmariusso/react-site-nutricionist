import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import { Navbar } from './Navbar';

import { Container, Header, Button, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Navbar />
        <Button>
          <a href="https://api.whatsapp.com/send?phone=5511910955929" target="_blank" rel="noreferrer">
            <button>
              Agendar Consulta
            </button>
          </a>
        </Button>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Marina Marocci Nutrição Integrada © 2021 - Todos os direitos reservados.</a>
          </li>
          <li>
            <a href="#">Criado com 💛</a>
          </li>
          <li>
            <a href="https://linktr.ee/gaahmariusso" target="_blank">por Gabriel Mariusso Caldeira</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;