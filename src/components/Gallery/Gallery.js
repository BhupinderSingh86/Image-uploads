import React, { useState } from "react";
import UploadButton from "../UploadButton/UploadButton";
import "./Gallery.css";
export default function Gallery() {
    const [gallery1, setGallery1] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );
    const [gallery2, setGallery2] = useState(
        "https://pic.onlinewebfonts.com/svg/img_206976.png"
    );
    const [gallery3, setGallery3] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );
    const [gallery4, setGallery4] = useState(
        "https://pic.onlinewebfonts.com/svg/img_206976.png"
    );
    const [gallery5, setGallery5] = useState(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    );
    const [gallery6, setGallery6] = useState(
        "https://pic.onlinewebfonts.com/svg/img_206976.png"
    );
    // const [galleryItem, setGalleryItem] = useState();
    // "https://pic.onlinewebfonts.com/svg/img_206976.png"
    //localStorage.setItem("gallery", data);

    return (
        <div className="Gallery">
            <div className="gallery-entry">
                <img
                    className="gallery-image"
                    src={gallery1}
                    alt="galleryItem"
                ></img>
                <div className="upload-button-container">
                    <UploadButton input={setGallery1} />
                </div>
            </div>
            <div className="gallery-entry">
                <img
                    className="gallery-image"
                    src={gallery2}
                    alt="galleryItem"
                ></img>
                <div className="upload-button-container">
                    <UploadButton input={setGallery2} />
                </div>
            </div>
            <div className="gallery-entry">
                <img
                    className="gallery-image"
                    src={gallery3}
                    alt="galleryItem"
                ></img>
                <div className="upload-button-container">
                    <UploadButton input={setGallery3} />
                </div>
            </div>
            <div className="gallery-entry">
                <img
                    className="gallery-image"
                    src={gallery4}
                    alt="galleryItem"
                ></img>
                <div className="upload-button-container">
                    <UploadButton input={setGallery4} />
                </div>
            </div>
            <div className="gallery-entry">
                <img
                    className="gallery-image"
                    src={gallery5}
                    alt="galleryItem"
                ></img>
                <div className="upload-button-container">
                    <UploadButton input={setGallery5} />
                </div>
            </div>
            <div className="gallery-entry">
                <img
                    className="gallery-image"
                    src={gallery6}
                    alt="galleryItem"
                ></img>
                <div className="upload-button-container">
                    <UploadButton input={setGallery6} />
                </div>
            </div>
        </div>
    );
}
