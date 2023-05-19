import { FC, useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import { AudioCloseSVG, AudioDownloadSVG, AudioPlaySVG, AudioStopSVG } from './svgStorage'
import React from 'react';
import Spinner from '../spiner/Spiner';



const AudioStyled = styled.div.attrs({className:'audio'})`
  width: 352px;
  height: 48px;
  border-radius: 48px;
  background-color: #EAF0FA;
  padding: 0 20px;
  color: #122945;
  font-family: 'SFProDisplay';
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  display: none;
  position: relative;
  .audio__time{
    width: 36px;
    margin-right: 12px;
  }
  .audio__stop{
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .audio__progress{
    width: 164px;
    height: 4px;
    border-radius: 50px;
    margin: 0 12px 0 8px;
    &::-webkit-progress-bar{
      background-color: #ADBFDF;
    }
    &::-webkit-progress-value{
      background-color: #002CFB;
    }
  }
  .audio__input{
    position: absolute;
    left: 98px;
    width: 164px;
    opacity: 0;
  }
  .audio__download, .audio__close{
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover path{
      fill: #002CFB;
    }
  }
  .audio__close{
    margin-left: 12px;
  }
`


interface AudioProps {
  mp3: Blob | null;
}

export const Audio:FC<{mp3:any}> = ({ mp3 }) =>{
  const [isPlay, setIsplay] = useState<boolean>(false)
  let [duration, setDuration] = useState<string>()
  const audioItem = useRef<any>()
  const playHandler = ()=>{
    setIsplay(isPlay?false:true)
    isPlay?audioItem.current.pause():audioItem.current.play()
  }
  const endHandler = ()=>{
    setIsplay(isPlay?false:true)
    audioItem.current.load()
  }
  const [ percentage, setPercentage ] = useState<number>(0)
  const changeHandler = (event:any)=>{
    setPercentage(event.target.value)
    audioItem.current.currentTime = audioItem.current?.duration/100 * event.target.value
  }
  const timeUpdateHandler = ()=>{
    let date = new Date(audioItem.current.currentTime * 1000)
    setDuration(date.getMinutes()+':'+date.getSeconds())
  }
  return(
    <AudioStyled>
      <audio src={mp3} ref={audioItem} onTimeUpdate={timeUpdateHandler} onEnded={endHandler}></audio>
      <div className="audio__time">{duration}</div>
      <div className="audio__stop" onClick={playHandler}>{isPlay?<AudioStopSVG/>:<AudioPlaySVG/>}</div>
      <progress className="audio__progress" max={audioItem.current?.duration} value={audioItem.current?.currentTime}></progress>
      <input className="audio__input" type='range' onChange={changeHandler} value={!audioItem.current?.currentTime?0:audioItem.current?.currentTime/audioItem.current?.duration*100}/>
      <div className="audio__line"></div>
      <div className="audio__download"><AudioDownloadSVG/></div>
      <div className="audio__close"><AudioCloseSVG/></div>
    </AudioStyled>
  )
}


// export const Audio:FC<{mp3:any}> = ({ mp3 }) =>{
//   const [isPlay, setIsplay] = useState<boolean>(false)
//   let [duration, setDuration] = useState<string>()
//   const audioItem = useRef<any>()
//   const playHandler = ()=>{
//     setIsplay(isPlay?false:true)
//     isPlay?audioItem.current.pause():audioItem.current.play()
//   }
//   const endHandler = ()=>{
//     setIsplay(isPlay?false:true)
//     audioItem.current.load()
//   }
//   const [ percentage, setPercentage ] = useState<number>(0)
//   const changeHandler = (event:any)=>{
//     setPercentage(event.target.value)
//     audioItem.current.currentTime = audioItem.current?.duration/100 * event.target.value
//   }
//   const timeUpdateHandler = ()=>{
//     let date = new Date(audioItem.current.currentTime * 1000)
//     setDuration(date.getMinutes()+':'+date.getSeconds())
//   }
//   return(
//     <AudioStyled>
//       <audio src={mp3} ref={audioItem} onTimeUpdate={timeUpdateHandler} onEnded={endHandler}></audio>
//       <div className="audio__time">{duration}</div>
//       <div className="audio__stop" onClick={playHandler}>{isPlay?<AudioStopSVG/>:<AudioPlaySVG/>}</div>
//       <progress className="audio__progress" max={audioItem.current?.duration} value={audioItem.current?.currentTime}></progress>
//       <input className="audio__input" type='range' onChange={changeHandler} value={!audioItem.current?.currentTime?0:audioItem.current?.currentTime/audioItem.current?.duration*100}/>
//       <div className="audio__line"></div>
//       <div className="audio__download"><AudioDownloadSVG/></div>
//       <div className="audio__close"><AudioCloseSVG/></div>
//     </AudioStyled>
//   )
// }