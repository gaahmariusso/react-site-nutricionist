import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import logoImg from '../../assets/images/logo_mm.svg';

import { Navbar } from './Navbar';

import { Container, Header, Button, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo Image" width="250" height="80" />
        <Navbar />
        <Button>
          <button>Agendar Consulta</button>
        </Button>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Marina Marocci Nutricionista © 2021 - Todos os direitos reservados.</a>
          </li>
          <li>
            <a href="#">Criado com 💛</a>
          </li>
          <li>
            <a href="#">por Gabriel Mariusso Caldeira</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;