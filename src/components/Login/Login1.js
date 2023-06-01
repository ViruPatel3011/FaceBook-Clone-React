import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
// import { auth } from "./firebasxe";
import { auth, provider } from "./firebaseFile";

function Login() {
  const signIn = () => {
    // Sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
          alt=""
          className="logo_image"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          alt=""
          className="faceBooktext"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
