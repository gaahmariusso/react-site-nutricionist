import React from 'react';

import { Container } from './styles';

import Iframe from 'react-iframe';

const MeetTheOffice: React.FC = () => {
  return (
    <Container>
      <Iframe
        url="https://360player.io/p/twb2Yz/"
        width="1200"
        height="500"
        allow="fullscreen; xr-spatial-tracking"
        data-token="twb2Yz"
        id="consult"
        className="consult"
        position="relative" />
    </Container>
  );
};

export default MeetTheOffice;
