import React from "react";
import "./UserPage.css";
import UserItem from "./UserItem";

function UserPage() {
  return (
    <div className="userPage">
      <h1>Friends</h1>
      <div className="filter_button">
        <button>Requests</button>
        <button>Your friends</button>
      </div>
      <h3 className="headerTag">People You May Know</h3>
      <UserItem profilePic="https://cdn.pixabay.com/photo/2023/04/11/04/59/bird-7915772_1280.jpg" userName="Viral Patel"/>
      <UserItem profilePic="https://cdn.pixabay.com/photo/2023/05/14/05/04/seagull-7991991_640.jpg" userName="Shyam Thakor"/>
      <UserItem profilePic="https://cdn.pixabay.com/photo/2023/04/11/04/59/bird-7915772_1280.jpg" userName="ViramSinh S Jadeja"/>
      <UserItem profilePic="https://cdn.pixabay.com/photo/2023/04/04/10/21/fashion-7898973__340.jpg" userName="Jaypalsinh Rana"/>
    
    </div>
  );
}

export default UserPage;
