import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import Card from "./Card";
import UserAvatar from "./UserAvatar";
import { ThemeContext } from "../../contexts/ThemeContext";
import "ionicons";
import PropTypes from "prop-types";

function CardForPost({ onPostCreated }) {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const [postDescription, setPostDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconClick = () => {
    alert("Icon clicked");
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("desc", postDescription);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const token = localStorage.getItem("authToken");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5005/posts/create",
        formData,
        config
      );
      console.log(response);
      alert("Post created successfully!");

      if (onPostCreated) {
        onPostCreated();
      }

      setPostDescription("");
      setSelectedImage(null);
    } catch (error) {
      console.log("Error creating post: ", error);
      alert("Failed to create a post, try again");
    }
  };

  return (
    <Card>
      <div className="flex gap-2">
        <UserAvatar isOnline={true} />

        <textarea
          className={
            "w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2 top-bar " +
            theme
          }
          placeholder={`What's on your mind, ${user.userName}?`}
          value={postDescription}
          onChange={(event) => setPostDescription(event.target.value)}
          required
        ></textarea>
      </div>

      <input type="file" name="image" onChange={handleImageChange} />

      <div className="flex gap-7 items-center mt-2">
        <div>
          <button
            onClick={handleIconClick}
            aria-label="tag friends"
            title="Tag friends"
            className="tagButton flex gap-1"
            style={{ color: "#808080", fontSize: "15px" }}
          >
            <ion-icon name="paw"></ion-icon>
            Tag Paw-friends
          </button>
        </div>

        <div>
          <button
            onClick={handleIconClick}
            aria-label="check-in"
            title="check-in"
            className="checkinButton flex gap-1"
            style={{ color: "#808080", fontSize: "15px" }}
          >
            <ion-icon name="location"></ion-icon>
            Check-in
          </button>
        </div>

        <div>
          <button
            onClick={handleIconClick}
            aria-label="mood"
            title="mood"
            className="moodButton flex gap-1"
            style={{ color: "#808080", fontSize: "15px" }}
          >
            <ion-icon name="happy"></ion-icon>
            Feeling
          </button>
        </div>

        <div className="flex justify-end grow">
          <button
            type="submit"
            onClick={handleSubmit}
            className={
              "w-1/2 flex justify-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none button " +
              theme
            }
          >
            Post
          </button>
        </div>
      </div>
    </Card>
  );
}

//props validation
CardForPost.propTypes = {
  onPostCreated: PropTypes.func.isRequired,
};

export default CardForPost;
