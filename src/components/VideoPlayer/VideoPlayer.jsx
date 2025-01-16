import React, { useRef } from 'react'
import educVid from '../../assets/education-vid.mp4'
import '../VideoPlayer/VideoPlayer.css'


const VideoPlayer = ({ playVid, setPlayVid }) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
        setPlayVid(false);
    }
  }

  return (
    <div className={`video-container ${playVid ? '' : 'hide'}`}
    ref={player} onClick={(e) => closePlayer(e)}>
        <video src={educVid} className='video-univ' muted autoPlay controls/>
    </div>
  )
}

export default VideoPlayer
