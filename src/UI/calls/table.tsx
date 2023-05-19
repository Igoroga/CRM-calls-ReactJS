import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BadlySVG, FallIncomingSVG, FallOutgoingSVG, FineSVG, GreatSVG, IncomingSVG, OutgoingSVG } from '../commons/svgStorage'
import { v1 } from 'uuid'
import { Audio } from '../commons/audio'
import mp3 from  '../../forStyle/audio/sound.mp3'
import { callsAxios } from '../../api/api'
import AudioPlayer from '../commons/testAudio'


const TableStyled = styled.div`
.table{
  display: grid;
  grid-template-rows: 60px 1fr;
  font-family: 'SFProDisplay';
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 60px;
  .table__head{
    display: grid;
    grid-template-columns: minmax(25px, 54px) minmax(48px, 89px) minmax(76px, 128px) minmax(250px, 326px) 214px minmax(170px, 197px) 352px;
    align-items: center;
    color: #899CB1;
    font-size: 14px;
    font-weight: 400;
    padding: 0 40px;
    .duration{
      justify-self: end;
    }
  }
  .table__body{
    font-size: 15px;
    font-weight: 400;
    display: grid;
    grid-auto-rows: 64px;
    .table__row{
      display: grid;
      grid-template-columns: minmax(25px, 54px) minmax(48px, 89px) minmax(76px, 128px) minmax(250px, 326px) 214px minmax(170px, 197px) 352px;
      align-items: center;
      border-top: 1px solid #EAF0FA;
      cursor: pointer;
      color: #122945;
      padding: 0 40px;
      position: relative;
      .type{
        height: 24px;
        width: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .employee{
        display: grid;
        align-items: center;
        .employee__avatar{
          width: 32px;
          border-radius: 50%;
        }
      }
      .source{
        color: #5E7793;
      }
      .duration{
        justify-self: end;
      }
    }
    .table__row:hover{
      background-color: #d4dff32d;
      .duration{
        display: none;
      }
      .audio{
        display: flex;
      }
    }
  }
}
`

export const Table:FC<{listCalls:any,audio:any}> = (props)=>{
  const {listCalls,audio} = props
  // const [audio, setAudio] = useState<ArrayBuffer>(mp3)

  // const fetchAudio = async () => {
  //   const mp3: any = await callsAxios.getRecord("MToxMDA2NzYxNToxNDMwMDM3NzExNzow", "578" )
  //   const encoder = new TextEncoder();
  //   const arrayBuffer = encoder.encode(mp3.data).buffer;
  //   setAudio(arrayBuffer)
  //   }


  const formatSeconds = (seconds:number) => {
    if (seconds == 0){return ''}
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }

  const tableBody = listCalls?.map((call:any)=>{
    const random = ()=>{
      let rand = 1 - 0.5 + Math.random() * (2 - 0 + 1);
      // console.log(audio);
      return Math.round(rand);
    }
    const randomGrade = call.time===0?0:random()
    let time = formatSeconds(call.time)
    return(
      <div className='table__row' key={v1()}>
        <div className="type">{call.in_out===1?call.time===0?<FallOutgoingSVG/>:<OutgoingSVG/>:call.time===0?<FallIncomingSVG/>:<IncomingSVG/>}</div>
        <div className="time">{call.date.substring(11,16)}</div>
        <div className="employee">
          <img className="employee__avatar" src={call.person_avatar}/>
        </div>
        <div className="call">{call.in_out===1?call.from_number:call.to_number}</div>
        <div className="source">{call.source}</div>
        <div className="grade">{randomGrade===3?<GreatSVG/>:randomGrade===2?<FineSVG/>:randomGrade===1?<BadlySVG/>:''}</div>
        {call.record ? <Audio mp3={mp3} /> : null}
         <div className="duration">{time}</div>
      </div>
    )
  })
  return(
    <TableStyled>
       <div className="table">
        <div className="table__head">
          <div className="type">Тип</div>
          <div className="time">Время</div>
          <div className="employee">Сотрудник</div>
          <div className="call">Звонок</div>
          <div className="source">Источник</div>
          <div className="grade">Оценка</div>
          <div className="duration">Длительность</div>
        </div>
        <div className="table__body">
          {tableBody}
        </div>
      </div>
    </TableStyled>
   )
}