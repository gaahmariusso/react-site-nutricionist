import React from 'react';

import Page from './components/Page';

import { GlobalStyles } from './styles/GlobalStyles';
import { FontStyles } from './styles/FontStyles';

function App() {
  return (
    <>
      <Page />

      <GlobalStyles />
      <FontStyles />
    </>
  );
}

export default App;
