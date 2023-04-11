import React, { useState } from 'react'
import { GoMute, GoUnmute } from "react-icons/go";

export const MuteButton = ({videoRef}) => {

  const [isMuted, setIsMuted] = useState(false)

  const handleMute = () => {
    let video = videoRef.current
    console.log("properties",video)

    video.muted = !video.muted

    if(video.muted === true) {
      setIsMuted(true)
    }else{
      setIsMuted(false)
    }
  }

  return (
    <button onClick={handleMute}>
    {
      isMuted ? <GoMute/> : <GoUnmute/>
    }
    </button>  
  )
}
