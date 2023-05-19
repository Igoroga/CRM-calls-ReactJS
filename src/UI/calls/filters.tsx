import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { BadlySVG, FineSVG, GreatSVG } from '../commons/svgStorage'
import { More } from '../commons/more'
import avatar from '../../forStyle/images/avatars.jpg'

const FiltersStyled = styled.div`
display: flex;
gap: 32px;
overflow: visible;
&>*{
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: 12px;
  margin-top: 12px;
}
.f-por{
  position: relative;
  overflow: visible;
  .f-abs{
    position: absolute;
    display: none;
    z-index: 3;
    right: 0;
    top: 36px;
    width: 204px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 26px 0 #e9edf3cc;
    &>*{
      height: 40px;
      padding-left: 20px;
      color: #899CB1;
      display: flex;
      gap: 8px;
      align-items: center;
      .item__name{
        padding-left: 40px;
        pointer-events: none;
      }
      .item__avatar{
        position: absolute;
        width: 32px;
        border-radius: 50%;
        pointer-events: none;
      }
    }
    &>.item__current{
      color: #002efbdd;
    }
    &>*:not(.title):hover{
      background-color: #002efb21;
      color: #122945;
    }
  }
}
.f-por:hover{
  color: var(--color-blue);
  & .f-abs{
    display: block;
  }
  & path{
    fill: var(--color-blue);
  }
}
`

export const Filters:FC<any> = (props) => {
  const { getList, getEmployees } = props
  const [allFilters, setAllFilters] =useState({
    type: '',
    source: '',
  })
  useEffect(()=>{
    getEmployees()
  },[])
  useEffect(()=>{
    getList(allFilters)
  },[allFilters])
  const [typesCurrent, setTypesCurrent] = useState('Все типы')
  const typesClickHandler = (event:any)=>{
    setTypesCurrent(event.target.outerText)
    setAllFilters({...allFilters, type:event.target.dataset.value})
  }
  const [employeesCurrent, setEmployeesCurrent] = useState('Все сотрудники')
  const employeesClickHandler = (event:any)=>{
    setEmployeesCurrent(event.target.outerText)
  }
  const [callsCurrent, setCallsCurrent] = useState('Все звонки')
  const callsClickHandler = (event:any)=>{
    setCallsCurrent(event.target.outerText)
    event.target.parentElement.nextSibling.value = event.target.dataset.value
  }
  const [sourcesCurrent, setSourcesCurrent] = useState('Все источники')
  const sourcesClickHandler = (event:any)=>{
    setSourcesCurrent(event.target.outerText)
    setAllFilters({...allFilters, source:event.target.dataset.value})
  }
  const [gradesCurrent, setGradesCurrent] = useState('Все оценки')
  const gradesClickHandler = (event:any)=>{
    setGradesCurrent(event.target.outerText)
  }
  const [errorsCurrent, setErrorsCurrent] = useState('Все ошибки')
  const errorsClickHandler = (event:any)=>{
    console.log(event.target.outerText)
    setErrorsCurrent(event.target.outerText)
  }
  return (
    <FiltersStyled>
      <div className="types f-por">
        <div className="types__current">{typesCurrent}</div>
        <div className="types__svg"><More /></div>
        <ul className="types__list f-abs">
          <li className={`types__item ${typesCurrent==='Все типы'?'item__current':''}`} onClick={typesClickHandler} data-value="">Все типы</li>
          <li className={`types__item ${typesCurrent==='Клиенты'?'item__current':''}`} onClick={typesClickHandler} data-value="clients">Клиенты</li>
          <li className={`types__item ${typesCurrent==='Новые клиенты'?'item__current':''}`} onClick={typesClickHandler} data-value="new_clients">Новые клиенты</li>
          <li className={`types__item ${typesCurrent==='Рабочие'?'item__current':''}`} onClick={typesClickHandler} data-value="workers">Рабочие</li>
          <li className={`types__item ${typesCurrent==='Приложение'?'item__current':''}`} onClick={typesClickHandler} data-value="app">Приложение</li>
        </ul>
      </div>
      <div className="employees f-por">
        <div className="employees__current">{employeesCurrent}</div>
        <div className="employees__svg"><More /></div>
        <ul className="employees__list f-abs">
          <li className={`employees__item ${employeesCurrent==='Все сотрудники'?'item__current':''}`} onClick={employeesClickHandler} data-value="">Все сотрудники</li>
          <li className={`employees__item ${employeesCurrent==='Константин К.'?'item__current':''}`} onClick={employeesClickHandler} data-value="id Константина">
            <div className="item__name">Константин К.</div>
            <img src={avatar} className="item__avatar" />
          </li>
          <li className={`employees__item ${employeesCurrent==='Полина З.'?'item__current':''}`} onClick={employeesClickHandler} data-value="id Полины">
            <div className="item__name">Полина З.</div>
            <img src={avatar} className="item__avatar" />
          </li>
        </ul>
      </div>
      <div className="calls f-por">
        <div className="calls__current">{callsCurrent}</div>
        <div className="calls__svg"><More /></div>
        <ul className="calls__list f-abs">
          <li className={`calls__item ${callsCurrent==='Все звонки'?'item__current':''}`} onClick={callsClickHandler} data-value="">Все звонки</li>
          <li className={`calls__item ${callsCurrent==='Новые клиенты'?'item__current':''}`} onClick={callsClickHandler} data-value="">Новые клиенты</li>
          <li className={`calls__item ${callsCurrent==='Все исполнители'?'item__current':''}`} onClick={callsClickHandler} data-value="">Все исполнители</li>
          <li className={`calls__item ${callsCurrent==='Через приложение'?'item__current':''}`} onClick={callsClickHandler} data-value="">Через приложение</li>
          <li className={`calls__item ${callsCurrent==='Прочие звонки'?'item__current':''}`} onClick={callsClickHandler} data-value="">Прочие звонки</li>
        </ul>
      </div>
      <div className="sources f-por">
        <div className="sources__current">{sourcesCurrent}</div>
        <div className="sources__svg"><More /></div>
        <ul className="sources__list f-abs">
          <li className={`sources__item ${sourcesCurrent==='Все источники'?'item__current':''}`} onClick={sourcesClickHandler} data-value="">Все источники</li>
          <li className={`sources__item ${sourcesCurrent==='С сайта'?'item__current':''}`} onClick={sourcesClickHandler} data-value="from_site">С сайта</li>
          <li className={`sources__item ${sourcesCurrent==='Yandex номер'?'item__current':''}`} onClick={sourcesClickHandler} data-value="yandex">Yandex номер</li>
          <li className={`sources__item ${sourcesCurrent==='Google номер'?'item__current':''}`} onClick={sourcesClickHandler} data-value="google">Google номер</li>
          <li className={`sources__item ${sourcesCurrent==='Без источника'?'item__current':''}`} onClick={sourcesClickHandler} data-value="empty">Без источника</li>
        </ul>
      </div>
      <div className="grades f-por">
        <div className="grades__current">{gradesCurrent}</div>
        <div className="grades__svg"><More /></div>
        <ul className="grades__list f-abs">
          <li className={`grades__item ${gradesCurrent==='Все оценки'?'item__current':''}`} onClick={gradesClickHandler} data-value="">Все оценки</li>
          <li className={`grades__item ${gradesCurrent==='Распознать'?'item__current':''}`} onClick={gradesClickHandler} data-value="">Распознать</li>
          <li className={`grades__item ${gradesCurrent==='Скрипт не использован'?'item__current':''}`} onClick={gradesClickHandler} data-value="">Скрипт не использован</li>
          <li className={`grades__item ${gradesCurrent==='...'?'item__current':''}`} onClick={gradesClickHandler} data-value=""><GreatSVG /></li>
          <li className={`grades__item ${gradesCurrent==='...'?'item__current':''}`} onClick={gradesClickHandler} data-value=""><FineSVG /></li>
          <li className={`grades__item ${gradesCurrent==='...'?'item__current':''}`} onClick={gradesClickHandler} data-value=""><BadlySVG /></li>
        </ul>
      </div>
      <div className="errors f-por">
        <div className="errors__current">{errorsCurrent}</div>
        <div className="errors__svg"><More /></div>
        <ul className="errors__list f-abs">
          <li className={`errors__item  ${errorsCurrent==='Все ошибки'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Все ошибки</li>
          <li className={`errors__item  ${errorsCurrent==='Приветствие'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Приветствие</li>
          <li className={`errors__item  ${errorsCurrent==='Имя'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Имя</li>
          <li className={`errors__item  ${errorsCurrent==='Цена'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Цена</li>
          <li className={`errors__item  ${errorsCurrent==='Скидка'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Скидка</li>
          <li className={`errors__item  ${errorsCurrent==='Предзаказ'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Предзаказ</li>
          <li className={`errors__item  ${errorsCurrent==='Благодарность'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Благодарность</li>
          <li className={`errors__item  ${errorsCurrent==='Стоп слова'?'item__current':''}`} onClick={errorsClickHandler} data-value="">Стоп слова</li>
        </ul>
      </div>
    </FiltersStyled>
  )
}