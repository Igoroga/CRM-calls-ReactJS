import {FC} from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Plug } from './plug'
import { CallsContainer } from './calls/callsContainer'


const MainStyled = styled.main`
  grid-area: main;
  background-color: var(--bg-color-main);
  overflow-y: scroll;
  position: relative;
  z-index: 1;
`

export const Main:FC = ()=>{
  return(
    <MainStyled>
      <Routes>
        <Route path='/results' element={<Plug/>}/>
        <Route path='/orders' element={<Plug/>}/>
        <Route path='/messages' element={<Plug/>}/>
        <Route path='/calls' element={<CallsContainer/>}/>
        <Route path='/counterparties' element={<Plug/>}/>
        <Route path='/documentation' element={<Plug/>}/>
        <Route path='/performers' element={<Plug/>}/>
        <Route path='/reports' element={<Plug/>}/>
        <Route path='/knowledgeBase' element={<Plug/>}/>
        <Route path='/settings' element={<Plug/>}/>
        <Route path='/addItem' element={<Plug/>}/>
        <Route path='/payment' element={<Plug/>}/>
        
      </Routes>
    </MainStyled>
  )
}