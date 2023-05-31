import React from 'react'
import { Button } from "@mui/material";

function UserItem(props) {
  return (
    <div>
         <div className="userInfo">
        <div className="left_partImage">
          <img
            src={props.profilePic}
            alt=""
          />
        </div>
        <div className="rightPartInfo">
          <h4>{props.userName}</h4>
          <div className="friendsButtons">
            <Button type="submit" className="Add">Add Friend</Button>
            <Button type="submit" className="Remove">Remove</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserItem