import React, { useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa"


export const PlayButton = ({videoRef}) => {

  const [isPlay, setIsPlay] = useState(false)

  const handlePlay = () => {
    let video = videoRef.current
    console.log("properties",video)

    if(video.paused){
      setIsPlay(true)
      video.play()
    }else{
      setIsPlay(false)
      video.pause()
    }
  }

  return (
    <button onClick={handlePlay}>
    {
      isPlay ? <FaPause/> : <FaPlay/>
    }
  </button>  
  )
}
