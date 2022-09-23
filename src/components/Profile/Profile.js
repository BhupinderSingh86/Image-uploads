import "./Profile.css";
import { useState } from "react";
import UploadButton from "../UploadButton/UploadButton";

function Profile() {
  const [upload, setUpload] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
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
