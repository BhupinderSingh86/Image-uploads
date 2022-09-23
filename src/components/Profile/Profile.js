import "./Profile.css";
import { useState } from "react";
import UploadButton from "../UploadButton/UploadButton";

function Profile() {
  const [upload, setUpload] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
  );

  const name = "name";

  return (
    <div className="profile">
      <img alt="avatar" className="avatar" src={upload}></img>
      <UploadButton input={setUpload} />
      <p className="name">{name}</p>
    </div>
  );
}

export default Profile;
