import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

function Post(props) {
  return (
    <div className="Post">
      <div className="post_top">
        <Avatar src={props.profilePic} className="post_avtar" />
        <div className="post_top_info">
          <h3>{props.user}</h3>
          {/* <p>{new Date(props.timestamp?.toDate()).toUTCString()}</p> */}
          <p>TimeStamp...</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{props.message}</p>
      </div>

      <div className="post_image">
        <img src={props.image}  alt="" />
      </div>
    </div>
  );
}

export default Post;
