import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="StoryReel">
      <Story
        image="https://cdn.pixabay.com/photo/2023/04/11/04/59/bird-7915772_1280.jpg"
        ProfilePic="https://cdn.pixabay.com/photo/2023/05/19/04/31/road-8003640_1280.jpg"
        title="Viral Patel"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2023/05/20/00/18/boat-8005603_1280.jpg"
        ProfilePic="https://cdn.pixabay.com/photo/2023/04/04/10/21/fashion-7898973__340.jpg"
        title="John Doe"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2023/05/14/05/04/seagull-7991991_640.jpg"
        ProfilePic="https://cdn.pixabay.com/photo/2023/05/02/15/52/support-7965543_640.jpg"
        title="Shyam Thakor"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_640.jpg"
        ProfilePic="https://cdn.pixabay.com/photo/2023/05/10/18/05/blackbird-7984650_640.jpg"
        title="JaypalSinh Rana"
      />
    </div>
  );
}

export default StoryReel;
