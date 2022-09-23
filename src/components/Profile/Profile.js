import "./Profile.css";
import {useState} from "react";
import UploadButton from "../UploadButton/UploadButton";


function Profile() {

const [upload, setUpload] = useState ("");

const name = "name";



  return (
    <div className= "profile">
      <img alt= "avatar" className= "avatar" src= {upload}></img>
      <UploadButton setUpload={setUpload}/>
      <p className= "name">{name}</p>
    </div>
  );
}

export default Profile;
