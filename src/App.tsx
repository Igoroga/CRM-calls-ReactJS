import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './UI/header';
import { Navbar } from './UI/navbar';
import { Main } from './UI/main';

const AppStyled = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas: 'navbar header' 'navbar main';
`

export const App:FC = ()=>{
  return (
    <AppStyled>
      <Header/>
      <Navbar/>
      <Main/>
    </AppStyled>
  );
}

