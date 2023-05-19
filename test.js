export const Table:FC<{listCalls:any}> = (props)=>{
    const {listCalls} = props
    const [audio, setAudio] = useState<ArrayBuffer>(mp3)
  
    const fetchAudio = async () => {
      const mp3: any = await callsAxios.getRecord("MToxMDA2NzYxNToxNDMwMDM3NzExNzow", "578" )
      const encoder = new TextEncoder();
          setAudio(mp3.data)
      }
     
  
    const formatSeconds = (seconds:number) => {
      if (seconds == 0){return ''}
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    }
  
  // useEffect(() =>{
  //   fetchAudio()
  // },[])
  
    const tableBody = listCalls?.map((call:any)=>{
      const random = ()=>{
        let rand = 1 - 0.5 + Math.random() * (2 - 0 + 1);
        console.log(listCalls);
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
          {call.record ? <Audio mp3={audio} /> : null}
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




  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = URL.createObjectURL(new Blob([mp3], { type: 'audio/mp3' }));
      audioRef.current.load();
    }
  }, [mp3]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onDurationChange = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

 

return (
    <AudioStyled>
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onDurationChange={onDurationChange}
        onEnded={() => setIsPlaying(false)}
      />
  <div className="audio__time">{duration}</div>
     <div className="audio__stop" onClick={playPause}>{isPlaying?<AudioStopSVG/>:<AudioPlaySVG/>}</div>
     <progress className="audio__progress" max={audioRef.current?.duration} value={audioRef.current?.currentTime}></progress>
     <input className="audio__input" type='range' onChange={onDurationChange} value={!audioRef.current?.currentTime?0:audioRef.current?.currentTime/audioRef.current?.duration*100}/>
     <div className="audio__line"></div>
     <div className="audio__download"><AudioDownloadSVG/></div>
     <div className="audio__close"><AudioCloseSVG/></div>
   </AudioStyled>

  );
};