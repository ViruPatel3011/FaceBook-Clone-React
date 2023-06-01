import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function MessageSender() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    // Apply overflow: hidden to the body when the modal is open
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalIsOpen]);
  const [msgInput, setMsgInput] = useState("");
  const [image, setImageUrl] = useState("");

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
            onChange={(e) => setMsgInput(e.target.value)}
            className="message_input"
            type="text"
            placeholder={`What's on your mind?`}
          />
          <input
            placeholder="image URL (Optional)"
            value={image}
            onChange={(e) => setImageUrl(e.target.value)}
          />

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

        <div className="message_Option" onClick={() => setModalIsOpen(true)}>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <Modal
          className="Modal"
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Create Post Modal"
          style={{
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              maxWidth: "90%",
              height: "500px",
              maxHeight: "90%",
              borderRadius: "8px",
              overflow: "hidden",
              outline: "none",
              padding: "20px 5px",
              background: "white",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            },
          }}
        >
          <h2>Create Post</h2>
          <hr />
          <div className="user_info">
            <Avatar />
            <h4 style={{ marginLeft: "10px" }}>Viral Patel</h4>
          </div>
          <div className="post_description">
            <textarea
              style={{ width: "100%", height: "100px", marginTop: "10px" }}
              placeholder="What's on Your Mind Viral?..."
            />
          </div>

          <div  className="AddPost">
            <div  className="AddPhotoIcon">
              <AddToPhotosIcon  className="AddPicIcon"/>
              <p>Add photos/videos </p>
              <span>or drag and drop</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Replace the icons with appropriate icons or images */}
              <div style={{ marginRight: "5px" }}>Icon 1</div>
              <div style={{ marginRight: "5px" }}>Icon 2</div>
              <div style={{ marginRight: "5px" }}>Icon 3</div>
              <div style={{ marginRight: "5px" }}>Icon 4</div>
              <div style={{ marginRight: "5px" }}>Icon 5</div>
            </div>
            <button style={{ width: "100%" }}>Post</button>
          </div>
        </Modal>

        <div className="message_Option">
          <InsertEmoticonIcon style={{ color: "#bac510" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
