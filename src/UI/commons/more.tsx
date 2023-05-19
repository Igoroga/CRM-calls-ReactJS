import { FC } from 'react'
import styled from 'styled-components'
import { MoreSVG } from './svgStorage'

const MoreStyled = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const More:FC = () => {
  return (
    <MoreStyled>
      <MoreSVG/>
    </MoreStyled>
  )
}