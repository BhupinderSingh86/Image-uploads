import React from "react";
import UploadButton from "../UploadButton/UploadButton";
import "./Banner.css";
import Profile from "../Profile/Profile";
import { useState } from "react";

function Banner() {
  const [background, setBackground] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );

  function handleChange(event) {
    setBackground(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files);
  }

  return (
    <div style={{ backgroundImage: `url("${background}")` }} className="Banner">
      {/* <img src={background} alt="background" /> */}
      <Profile />
      <UploadButton className="Upload-banner" input={setBackground} />
    </div>
  );
}

export default Banner;
