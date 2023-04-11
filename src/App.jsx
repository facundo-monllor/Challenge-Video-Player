import React,{ useState, useRef } from 'react'

import './App.css'
import { PlayButton } from './components/PlayButton'
import { DurationButton } from './components/DurationButton'
import { RangeButton } from './components/RangeButton'
import { MuteButton } from './components/MuteButton'
import { VolumeButton } from './components/volumeButton'
import { SpaceButton } from './components/SpaceButton'

function App() {

  const [videoDuration, setVideoDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [videoSpace, setVideoSpace] = useState(true)

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
          width={videoSpace ? "400px" : "800px"}
          height={videoSpace ? "300px" : "600px"}
          ref={videoRef}
          src="https://res.cloudinary.com/dkbp6rk0s/video/upload/v1681180060/sunset_timelapse_indkpb.mp4"
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

        <VolumeButton
          videoRef={videoRef}
        />

        <SpaceButton
         videoSpace={videoSpace}
         setVideoSpace={setVideoSpace}
        />

      </div>


    </div>
  )
}

export default App
