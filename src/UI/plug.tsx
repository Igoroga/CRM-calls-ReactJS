import {FC} from 'react'
import styled from 'styled-components'
import Spinner from './spiner/Spiner'


const PlugStyled = styled.main`
  height: 100%;
  grid-area: main;
  background-color: var(--bg-color-main);
  display: grid;
  grid-gap: 32px;
  align-content: center;
  justify-items: center;
  font-family: 'SFProDisplay';
  font-weight: 500;
  .message{
    font-size: 64px;
  }
  .author{
    font-size: 32px;
    .author_link{
      color: #369089;
    }
  }
  .date{
    font-size: 32px;
  }
`

export const Plug:FC = ()=>{
  return(
    <PlugStyled>
     <Spinner/>
    </PlugStyled>
  )
}