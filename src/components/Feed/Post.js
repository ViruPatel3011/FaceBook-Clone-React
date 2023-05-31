import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


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
        <img src={props.image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>
        </div> 
        <div className="post_option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
         <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div> 
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
          
        </div>
      </div>
    </div>
  );
}

export default Post;
