import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";


export const DurationButton = ({videoRef, accion}) => {

  const changeDuration = (action) => {
      const video = videoRef.current;
      if (action === "sumar") {
          video.currentTime += 10; // suma 10 segundos al currentTime
      } else if (action === "restar") {
          video.currentTime -= 10; // resta 10 segundos al currentTime
      }
  }; 
    
  return (
    <div>
        <button onClick={() => changeDuration(accion)}>
          {accion === "sumar" ? <IoAddCircleOutline/> : <IoRemoveCircleOutline/>}
        </button>
    </div>  
  )
}
