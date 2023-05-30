import React from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";

function MessageSender() {
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar  />
        <form >
            <input type="text" placeholder={`What's on your mind`} />
            <input placeholder="image URL (Optional)" />
        </form>
      </div>
      <div className="messageSender_bottom"></div>
    </div>
  );
}

export default MessageSender;
