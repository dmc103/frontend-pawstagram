import axios from "axios";
import { Image } from "cloudinary-react";
import PropTypes from "prop-types";
import { useState } from "react";

function ProfilePicUploader({ onImageUpload }) {
  const [imageSelected, setImageSelected] = useState("");

  const generic = "../assets/generic_pic.png";

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
      {<Image /> ? (
        <Image
          style={{ height: "80px", borderRadius: "50%" }}
          cloudName="dl7j7kjhq"
          publicId="https://res.cloudinary.com/dl7j7kjhq/image/upload/v1705768204/suebzw7ygvloxbhfv1v0.png"
        />
      ) : (
        <img src={generic} alt="generic" />
      )}

      {}

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
