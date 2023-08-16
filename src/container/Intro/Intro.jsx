import React from 'react';
import { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {meal} from "../../constants"
import './Intro.css';

function Intro(){
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  function handleVideo(){
    setPlayVideo((prevValue) => !prevValue);
    if(playVideo){
      vidRef.current.play();
    }else{
      vidRef.current.pause();
    }
  }
  return (
    <div className="app__video">
      <video 
      src={meal}
      type="video/mp4"
      ref={vidRef}
      loop
      controls={false}
      muted
      />
      <div className='app__video-overlay'>
        <div className='app__video-overlay_circle' onClick={handleVideo}>
          {playVideo ? <BsFillPlayFill color='#FFF' fontSize={30}/> : <BsPauseFill color='#FFF' fontSize={30}/>}
        </div>
      </div>
    </div>
  )
}
export default Intro;
