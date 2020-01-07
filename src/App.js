import React from 'react';
import { createGlobalStyle } from 'styled-components';
import VelogLeft from './components/VelogLeft';
import VelogLeftItem from './components/VelogLeftItem';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Apple SD Gothic Neo,AppleSDGothicNeo,Noto Sans CJK KR,NanumGothic,Malgun Gothic,"\B9D1\C740 \ACE0\B515",돋움,dotum,arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
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
