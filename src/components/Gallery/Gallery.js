import React, { useState } from "react";
import UploadButton from "../UploadButton/UploadButton";
import "./Gallery.css";
export default function Gallery() {
    const [gallery, setGallery] = useState([
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "https://pic.onlinewebfonts.com/svg/img_206976.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    ]);
    // const [galleryItem, setGalleryItem] = useState();

    //localStorage.setItem("gallery", data);

    return (
        <div className="Gallery">
            {gallery.map((galleryEntry) => {
                return (
                    <div className="gallery-entry">
                        <img
                            className="gallery-image"
                            src={galleryEntry}
                            alt="galleryItem"
                        ></img>
                    </div>
                );
            })}
            <UploadButton input={setGallery} />
        </div>
    );
}
