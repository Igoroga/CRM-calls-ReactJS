import { FC } from 'react'
import styled from 'styled-components'

const CurrentDateStyled = styled.div`
  width: 176px;
  margin: auto 0;
  color: #899CB1;
  font-size: 15px;
  font-weight: 400;
`

export const CurrentDate:FC = ()=>{
  let newDate = new Date()
  const day = ()=>{
    switch(newDate.getDay()){
      case 0:
        return 'Воскресенье'
      case 1:
        return 'Понедельник'
      case 2:
        return 'Вторник'
      case 3:
        return 'Среда'
      case 4:
        return 'Четверг'
      case 5:
        return 'Пятница'
      case 6:
        return 'Суббота'
    }
  }
  const date = newDate.getDate()
  const month = ()=>{
    switch(newDate.getDay()){
      case 0:
        return 'янв'
      case 1:
        return 'фев'
      case 2:
        return 'мар'
      case 3:
        return 'апр'
      case 4:
        return 'май'
      case 5:
        return 'июн'
      case 6:
        return 'июл'
      case 7:
        return 'авг'
      case 8:
        return 'сен'
      case 9:
        return 'окт'
      case 10:
        return 'ноя'
      case 11:
        return 'дек'
    }
  }
  return(
    <CurrentDateStyled>
      {`${day()}, ${date} ${month()}`}
    </CurrentDateStyled>
  )
}