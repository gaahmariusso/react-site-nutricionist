import React from 'react';
import { Container, Heading } from './styles';

interface Props {
  label: string;
  components: any;
  // components: React.ComponentType;
}

const DefaultOverlayContent: React.FC<Props> = ({ label, components }) => {

  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
      </Heading>

      {components}

    </Container>
  );
};

export default DefaultOverlayContent;
