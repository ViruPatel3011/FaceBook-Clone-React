import React from 'react'
import './Story.css';
import { Avatar } from '@mui/material';

function Story({image,ProfilePic,title}) {
  return (
    <div className="Story" style={{backgroundImage:`url(${image})`}}>
        <Avatar src={ProfilePic} className="story_avtar"/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story