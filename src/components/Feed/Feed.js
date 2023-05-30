import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="Feed">
        <StoryReel/>
        <MessageSender/>
        <Post profilePic="https://cdn.pixabay.com/photo/2023/04/11/04/59/bird-7915772_1280.jpg" image="https://cdn.pixabay.com/photo/2023/04/04/10/21/fashion-7898973__340.jpg" user="Viral Patel" timestamp="This is a Timestamp" message="Hello Peoples!"/>
        <Post profilePic="" image="" user="" timestamp="" message=""/>
        <Post profilePic="" image="" user="" timestamp="" message=""/>
    </div>
  )
}

export default Feed