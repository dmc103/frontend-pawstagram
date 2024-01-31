import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

function ProfilePicUploader({ onImageUpload }) {
  const [imageSelected, setImageSelected] = useState("");

  // const generic = "../assets/generic_pic.png";

  const uploadImage = () => {
    // console.log(files[0]);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "wpb1f2jw");

    axios
      .post("https://api.cloudinary.com/v1_1/dl7j7kjhq/upload", formData)
      .then((response) => {
        console.log(response);

        if (response.data && response.data.url) {
          onImageUpload(response.data.url);
        }
      });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}
      />
      <button style={{ backgroundColor: "white" }} onClick={uploadImage}>
        Upload Image
      </button>
    </div>
  );
}

//props validation
ProfilePicUploader.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};

export default ProfilePicUploader;

// CLOUDINARY_NAME=dl7j7kjhq
// CLOUDINARY_KEY=477639569552816
// CLOUDINARY_SECRET=Kse2eWffFYKVFtLx42kgQ3Y1gqQ
