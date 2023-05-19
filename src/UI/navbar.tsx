import {FC} from 'react'
import styled from 'styled-components'
import { CallsSVG, CounterpartiesSVG, DocumentationSVG, PaymentSVG, KnowledgeBaseSVG, LogoSVG, MessagesSVG, OrdersSVG, PerformersSVG, ReportsSVG, ResultsSVG, SettingsSVG, AddOrderSVG } from './commons/svgStorage'
import { Link, NavLink} from 'react-router-dom'


const NavbarStyled = styled.nav`
  grid-area: navbar;
  background-color: #091336;
  font-family: 'SFProDisplay';
  .logo{
    height: 64px;
    padding: 0 12px;
    display: grid;
    align-items: center;
  }
  .nav{
    margin-bottom: 64px;
    a{
      position: relative;
      z-index: 2;
    }
    .nav__item{
      display: grid;
      grid-template-columns: 26px 1fr;
      grid-gap: 12px;
      height: 52px;
      padding-left: 12px;
      align-items: center;
      .nav__item_text{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-not-active);
      }
      .nav__item_svg path{
        fill: var(--color-not-active);
      }
    }
    .active{
      background-color: #d8e4fb52;
      .nav__item_text{
        color: var(--color-active);
      }
      .nav__item_svg path{
        fill: #fff;
      }
      &::before{
        content: '';
        position: absolute;
        z-index: 3;
        height: 52px;
        width: 3px;
        background-color: var(--color-blue);
      }
      &::after{
        content: '';
        position: absolute;
        right: 18px;
        z-index: 3;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: var(--color-yellow);
        box-shadow: 0 3px 8px 0 #EDDA0180;
      }
    }
  }
  .buttons{
    display: grid;
    grid-gap: 32px;
    justify-items: center;
    .button{
      width: 200px;
      height: 52px;
      border-radius: 4px;
      cursor: pointer;
      background-color: var(--bg-color-btn);
      display: grid;
      grid-template-columns: 1fr 25px;
      align-items: center;
      padding-right: 20px;
      & span{
        color: #fff;
        font-size: 16px;
        font-weight: 500;
      }
      & path{
        fill: var(--color-not-active);
      }
      .button__text_add{
        padding-left: 24px;
      }
      .button__text_payment{
        padding-left: 65px;
      }
    }
    .button:hover{
      background-color: #223BC8;
    }
    .active{
      background-color: #274BC8;
    }
  }

`

export const Navbar:FC = ()=>{
  return(
    <NavbarStyled>
      <Link to='/' className='logo'><LogoSVG/></Link>
      <div className="nav">
        <NavLink to='results' className='nav__item'>
          <div className="nav__item_svg"><ResultsSVG/></div>
          <div className="nav__item_text">Итоги</div>
        </NavLink>
        <NavLink to='orders' className='nav__item'>
          <div className="nav__item_svg"><OrdersSVG/></div>
          <div className="nav__item_text">Заказы</div>
        </NavLink>
        <NavLink to='messages' className='nav__item'>
          <div className="nav__item_svg"><MessagesSVG/></div>
          <div className="nav__item_text">Сообщения</div>
        </NavLink>
        <NavLink to='calls' className='nav__item'>
          <div className="nav__item_svg"><CallsSVG/></div>
          <div className="nav__item_text">Звонки</div>
        </NavLink>
        <NavLink to='counterparties' className='nav__item'>
          <div className="nav__item_svg"><CounterpartiesSVG/></div>
          <div className="nav__item_text">Контрагенты</div>
        </NavLink>
        <NavLink to='documentation' className='nav__item'>
          <div className="nav__item_svg"><DocumentationSVG/></div>
          <div className="nav__item_text">Документы</div>
        </NavLink>
        <NavLink to='performers' className='nav__item'>
          <div className="nav__item_svg"><PerformersSVG/></div>
          <div className="nav__item_text">Исполнители</div>
        </NavLink>
        <NavLink to='reports' className='nav__item'>
          <div className="nav__item_svg"><ReportsSVG/></div>
          <div className="nav__item_text">Отчеты</div>
        </NavLink>
        <NavLink to='knowledgeBase' className='nav__item'>
          <div className="nav__item_svg"><KnowledgeBaseSVG/></div>
          <div className="nav__item_text">База знаний</div>
        </NavLink>
        <NavLink to='settings' className='nav__item'>
          <div className="nav__item_svg"><SettingsSVG/></div>
          <div className="nav__item_text">Настройки</div>
        </NavLink>
      </div>
      <div className="buttons">
        <NavLink to='addItem' className='button'>
          <span className='button__text_add'>Добавить заказ</span>
          <AddOrderSVG/>
        </NavLink>
        <NavLink to='payment' className='button'>
          <span className='button__text_payment'>Оплата</span>
          <PaymentSVG/>
        </NavLink>
      </div>
    </NavbarStyled>
  )
}