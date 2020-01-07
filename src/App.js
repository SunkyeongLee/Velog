import React from 'react';
import { createGlobalStyle } from 'styled-components';
import VelogLeft from './components/VelogLeft';
import VelogLeftItem from './components/VelogLeftItem';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}
  
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <VelogLeft>
      <VelogLeftItem />
    </VelogLeft>
    </>
  );
}

export default App;
