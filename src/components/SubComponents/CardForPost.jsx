import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Card from "./Card";
import UserAvatar from "./UserAvatar";
import { ThemeContext } from "../../contexts/ThemeContext";
import "ionicons";

function CardForPost() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleIconClick = () => {
    alert("Icon clicked");
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
        ></textarea>
      </div>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" icon w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
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

export default CardForPost;
