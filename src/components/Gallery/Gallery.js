import React, { useState } from "react";
import UploadButton from "../UploadButton/UploadButton";
import "./Gallery.css";
export default function Gallery() {
    const [gallery1, setGallery1] = useState(
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fvglkdcua1nn01.jpg%3Fauto%3Dwebp%26s%3D9078ed59ca2209aa73e70ecfe3b8169526c357dc&f=1&nofb=1"
    );
    const [gallery2, setGallery2] = useState(
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F19%2F85%2FNJTZdM.jpg&f=1&nofb=1"
    );
    const [gallery3, setGallery3] = useState(
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F52%2F13%2Fyqwfml.jpg&f=1&nofb=1"
    );
    const [gallery4, setGallery4] = useState(
        "https://media.istockphoto.com/photos/man-hiker-in-red-jacket-visit-studlagil-basalt-canyon-with-rare-picture-id1328130065?b=1&k=20&m=1328130065&s=170667a&w=0&h=0eTlJNpCr3DnqGeEWUsxyejh-I4J1XeV1wpF81z4hqA="
    );
    const [gallery5, setGallery5] = useState(
        "https://www.icelandtravel.is/wp-content/uploads/2019/03/Skogafoss-.jpg"
    );
    const [gallery6, setGallery6] = useState(
        "https://media.istockphoto.com/photos/colorful-aurora-borealis-picture-id1049922746?k=20&m=1049922746&s=612x612&w=0&h=9CTTi0NgH6wfPfXwv4GarPFFm_7qlFSQlSPUMlseKnw="
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
