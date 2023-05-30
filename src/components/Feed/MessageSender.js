import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function MessageSender() {
  const[msgInput,setMsgInput]=useState("");
  const[image,setImageUrl]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // This is for not page refreshing
    setMsgInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
          value={msgInput}
          onChange={(e)=>setMsgInput(e.target.value)}
            className="message_input"
            type="text"
            placeholder={`What's on your mind?`}
          />
          <input placeholder="image URL (Optional)" 
          value={image}
          onChange={(e)=>setImageUrl(e.target.value)}/>

          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="message_Option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message_Option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message_Option">
          <InsertEmoticonIcon style={{ color: "#bac510" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
