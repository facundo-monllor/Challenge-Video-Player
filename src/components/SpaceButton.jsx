import React from 'react'
import { IoExpand, IoContract } from "react-icons/io5";

export const SpaceButton = ({videoSpace, setVideoSpace}) => {

    const handleVideoSpace = () => {
        setVideoSpace(!videoSpace)
    }
    
  return (
    <button onClick={() => handleVideoSpace()}>
        {
            videoSpace ? <IoExpand/> : <IoContract/>
        }
    </button>
  )
}
