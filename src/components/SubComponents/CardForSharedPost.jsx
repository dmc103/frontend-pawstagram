import { useContext } from "react";
import Card from "./Card";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";

function CardForSharedPost({ post }) {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!post) {
    return (
      <div>
        <Card>
          <p>There are no posts created yet</p>
          <a href={`/profile/${user.userName}`} className="cursor-pointer">
            <p>Check out your profile here, {user.userName}</p>
          </a>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="flex px-5">
        <a href={`/profile/${user.userName}`} className="cursor-pointer">
          <UserAvatar isOnline={true} />
        </a>
        <div className="grow">
          <p>
            <a
              href={`/profile/${user.userName}`}
              className="font-semibold px-2 cursor-pointer hover:underline"
            >
              {user.userName}
            </a>
            shared a post
          </p>

          <p className="text-sm text-gray-500 px-2">1 hour ago</p>
        </div>
      </div>

      <div>
        <p className="my-2 text-sm">{post.description}</p>

        <div className="rounded-md overflow-hidden">
          <img src={post.image} alt="post" />
        </div>

        <div className=" flex mt-4">
          {/* like button */}
          <div>
            <button className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>{" "}
              29
            </button>
          </div>

          {/* comment button */}
          <div>
            <button className="flex gap-2 px-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                  clipRule="evenodd"
                />
              </svg>
              4
            </button>
          </div>

          {/* share button */}
          <div>
            <button className="flex gap-2 px-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
              5
            </button>
          </div>
        </div>

        {/* comment space */}
        <div className="flex mt-4 gap-3">
          <div>
            <UserAvatar isOnline={true} />
          </div>
          <textarea
            className="w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2"
            placeholder="Leave a comment"
          ></textarea>
        </div>
      </div>

      <Card />
    </div>
  );
}

//props validation
CardForSharedPost.propTypes = {
  post: PropTypes.object,
};

export default CardForSharedPost;
