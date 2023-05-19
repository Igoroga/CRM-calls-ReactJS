import { useEffect, useRef, useState } from "react";
import { callsAxios } from "../../api/api";

type Props = {
  audioBlobUrl: string;
};

const AudioPlayer = ({ audioBlobUrl }: Props) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [blobUrl, setBlobUrl] = useState("");
  
    useEffect(() => {
      const url = URL.createObjectURL(new Blob([audioBlobUrl]));
      setBlobUrl(url);
      return () => URL.revokeObjectURL(url);
    }, [audioBlobUrl]);
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.src = blobUrl;
      }
    }, [blobUrl]);
  
    return <audio controls ref={audioRef} />;
  };
  
  export default AudioPlayer;