import React from 'react'

export const RangeButton = ({videoDuration, videoRef, progress ,setProgress}) => {

const handleProgressChange = (event) => {
    const progress = event.target.value;
    setProgress(progress);
    const currentTime = (progress / 100) * videoDuration;
    videoRef.current.currentTime = currentTime;
    };

  return (
    <input type="range" value={progress} min="0" max="100" step="0.1" onChange={handleProgressChange}/>
  )
}
