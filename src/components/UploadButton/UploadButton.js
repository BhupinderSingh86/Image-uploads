import React from "react";
import { useState } from "react";

function UploadButton({ input }) {
  function handleChange(event) {
    input(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files);
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button>+</button>
    </div>
  );
}

export default UploadButton;
