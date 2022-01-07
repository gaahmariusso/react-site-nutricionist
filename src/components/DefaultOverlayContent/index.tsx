import React from 'react';
import { Container, Heading, Buttons } from './styles';

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

      {/* <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons> */}
    </Container>
  );
};

export default DefaultOverlayContent;
