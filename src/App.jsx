import React,{ useState, useRef } from 'react'
import { FaPlay, FaPause } from "react-icons/fa"

import './App.css'

function App() {

  const [isPlay, setIsPlay] = useState(false)
  const videoRef = useRef()

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
    <div className="App">

      <h1>Video player</h1>
      <video
        name="fufu"
        ref={videoRef}
        src="https://media.istockphoto.com/id/1226550746/es/v%C3%ADdeo/personaje-de-dibujos-animados-abstracto-3d-que-lleva-ropa-rosa-aislada-en-el-fondo-amarillo.mp4?s=mp4-640x640-is&k=20&c=Mf0EmFszZHvaDGZL-SclVui5w6D1Yb5TB6evKSm-mjc="
      ></video>

      <div className='buttons-video'>
        <button onClick={handlePlay}>
          {
            isPlay ? <FaPlay/> : <FaPause/>
          }
        </button>
      </div>
    </div>
  )
}

export default App
