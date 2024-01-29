import axios from "axios";
import PropTypes from "prop-types";

const ProfilePicUploader = ({ onUploadSuccess, currentImage }) => {
  const handleProfilePicChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_preset");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
          formData
        );
        const uploadedUrl = response.data.secure_url;
        onUploadSuccess(uploadedUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <>
      {currentImage && (
        <img
          src={currentImage}
          alt="Current Profile"
          className="w-20 h-20 object-cover rounded-full"
        />
      )}
      <input
        type="file"
        name="profilepic"
        onChange={handleProfilePicChange}
        className="my-2"
      />
    </>
  );
};

//validate the props
ProfilePicUploader.propTypes = {
  onUploadSuccess: PropTypes.func.isRequired,
  currentImage: PropTypes.string,
};

export default ProfilePicUploader;
