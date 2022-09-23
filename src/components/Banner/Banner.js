import React from "react";
import UploadButton from "../UploadButton/UploadButton";
import "./Banner.css";
import Profile from "../Profile/Profile";
import { useState } from "react";

function Banner() {
    const [background, setBackground] = useState(
        "https://img.andrewprokos.com/MANHATTAN-PANORAMIC-SKYLINE-FROM-WEEHAWKEN-3870-1200PX.jpg"
    );

    function handleChange(event) {
        setBackground(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files);
    }

    return (
        <div
            style={{ backgroundImage: `url("${background}") ` }}
            className="Banner"
        >
            {/* <img src={background} alt="background" /> */}
            <Profile />
            <UploadButton className="Upload-banner" input={setBackground} />
        </div>
    );
}

export default Banner;
