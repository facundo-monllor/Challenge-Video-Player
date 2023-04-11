import React,{ useState, useRef, useEffect } from 'react'

import './App.css'
import { PlayButton } from './components/PlayButton'
import { DurationButton } from './components/DurationButton'
import { RangeButton } from './components/RangeButton'
import { MuteButton } from './components/MuteButton'

function App() {

  const [videoDuration, setVideoDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef(null)

  const loadDuration = () => {
    setVideoDuration(
      videoRef.current.duration
    )
  }

  const handleCurrentTime = () => {
    setCurrentTime(
      videoRef.current.currentTime
    )
    setProgress((currentTime/videoDuration) * 100)
  }

  
  return (
    <div className="App">

      <div className='video-div'>
        <h1>Video player</h1>
        <video
          ref={videoRef}
          src="https://media.istockphoto.com/id/173046102/es/v%C3%ADdeo/cachorro-perro-corriendo-con-alegr%C3%ADa.mp4?s=mp4-640x640-is&k=20&c=oKIynUbuF3Pqvg3UjJDdYag80z37ESonXI26mfkvEBg="
          onLoadedMetadata={loadDuration}
          onTimeUpdate={handleCurrentTime}
        ></video>
      </div>

      <div className='buttons-video'>

        <PlayButton 
          videoRef={videoRef}
        />

        <DurationButton
          videoRef={videoRef}
          accion={"sumar"}
        />

        <DurationButton
          videoRef={videoRef}
          accion={"restar"}
        />

        <h5>{currentTime.toFixed(2)}</h5>

        <h5>/{videoDuration.toFixed(2)}</h5>

        <RangeButton
          videoDuration={videoDuration}
          videoRef={videoRef}
          progress={progress}
          setProgress={setProgress}
        />

        <MuteButton 
          videoRef={videoRef}
        />
        
      
      </div>


    </div>
  )
}

export default App
