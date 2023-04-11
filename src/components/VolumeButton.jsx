import React, { useState } from 'react'

export const VolumeButton = ({videoRef}) => {
  const [volume, setVolume] = useState(0.1)

  const handleVolume = (event) => {
    setVolume(
      event.target.value
    )
    videoRef.current.volume = event.target.value
    console.log(videoRef.current.volume)
  }


  return (
    <input type='range' value={volume} min="0" max="1" step="0.1" onChange={handleVolume}/>
  )
}
