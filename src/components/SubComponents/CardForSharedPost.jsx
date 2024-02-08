import { useContext, useState } from "react";
import Card from "./Card";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";
import "ionicons";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function CardForSharedPost({ post }) {
  const { user } = useContext(UserContext);

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const [userLiked, setUserLiked] = useState(post.likes.includes(user.userId));
  const [likesCount, setLikesCount] = useState(post.likes.length);

  const handleLike = async () => {
    const newLikesCount = userLiked ? likesCount - 1 : likesCount + 1;
    const wasLiked = userLiked;

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("User not authenticated");
        return;
      }

      setUserLiked(!userLiked);
      setLikesCount(newLikesCount);

      await axios.put(
        `${API_URL}/posts/${post._id}/like`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log("Error liking the post: ", error);

      setUserLiked(wasLiked);
      setLikesCount(wasLiked ? newLikesCount + 1 : newLikesCount - 1);
    }
  };

  if (!post) {
    return (
      <div>
        <Card>
          <p>fetching post...</p>
          <a href={`/profile/${user.userName}`} className="cursor-pointer">
            <p>Check out your profile here, {user.userName}</p>
          </a>
        </Card>
      </div>
    );
  }
  console.log("this is the post", post);

  return (
    <Card>
      <div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 px-4">
          <a href={`/profile/${user.userName}`} className="cursor-pointer">
            <UserAvatar
              profileImageUrl={user.profilepic}
              isOnline={true}
              size="w-20 h-20"
              indicatorPosition="top-14 start-16"
            />
          </a>
          <div className="md:grow">
            <p>
              <a
                href={`/profile/${user.userName}`}
                className="font-semibold px-2 cursor-pointer hover:underline"
              >
                {user.userName}
              </a>
              shared a post
            </p>

            <p className="text-sm text-gray-500 px-2">{timeAgo}</p>
          </div>
        </div>

        <div>
<<<<<<< HEAD
          <p className="my-2 text-xl text-gray-500">{post.desc}</p>
=======
          <p className="my-2 text-sm text-gray-500">{post.desc}</p>
>>>>>>> c7f862015d58bbf24d44c9970bdc9b668343406a

          {/* post and image rendering */}
          {post.img && (
            <div className="rounded-md overflow-hidden">
<<<<<<< HEAD
              <img src={post.img} alt="Post" className="post-image w-full" />
            </div>
          )}

          <div className="flex mt-4 mb-5 items-center">
            {/* like button */}
            <div className="flex items-center">
              <button className="flex gap-2">
                <ion-icon name="thumbs-up-outline">29</ion-icon>
=======
              <img src={post.img} alt="Post" className="post-image w-1/2" />
            </div>
          )}

          <div className=" flex">
            {/* like button */}
            <div>
              <button onClick={handleLike} className="flex gap-2 px-4">
                <ion-icon name="thumbs-up-outline"></ion-icon>
                {likesCount}
>>>>>>> c7f862015d58bbf24d44c9970bdc9b668343406a
              </button>
            </div>

            {/* comment button */}
<<<<<<< HEAD
            <div className="flex items-center">
              <button
                onClick={toggleComments}
                className="flex gap-2 px-4 items-center"
              >
                <ion-icon name="chatbubble-outline">4</ion-icon>
=======
            <div>
              <button onClick={toggleComments} className="flex gap-2 px-4">
                <ion-icon name="chatbubble-outline"></ion-icon>
>>>>>>> c7f862015d58bbf24d44c9970bdc9b668343406a
              </button>
            </div>

            {/* share button */}
            <div className="flex items-center">
              <button className="flex gap-2 px-2 items-center">
                <ion-icon name="share-social-outline"></ion-icon>
              </button>
            </div>
          </div>

          {/* comment space */}
          {showComments && (
            <div className="flex mt-4 gap-3 items-center">
              <div>
<<<<<<< HEAD
                <UserAvatar isOnline={true} size="w-10 h-10" />
=======
                <UserAvatar
                  profileImageUrl={user.profilepic}
                  isOnline={true}
                  size="w-11 h-11"
                  indicatorPosition="bottom-0 right-0"
                />
>>>>>>> c7f862015d58bbf24d44c9970bdc9b668343406a
              </div>
              <textarea
                className="w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2"
                placeholder="Leave a comment"
              ></textarea>
            </div>
          )}
        </div>

        <Card />
      </div>
    </Card>
  );
}

//props validation
CardForSharedPost.propTypes = {
  post: PropTypes.object,
};

export default CardForSharedPost;
