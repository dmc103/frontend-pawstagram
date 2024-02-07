import Card from "./Card";
import { formatDistanceToNow } from "date-fns";
import { useState, useContext, useCallback, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";
import "ionicons";
import axios from "axios";

function CardForOthers({ post }) {
  const { user } = useContext(UserContext);
  const [userLiked, setUserLiked] = useState(post.likes.includes(user.userId));
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("User not authenticated");
        return;
      }
      const response = await axios.get(
        `http://localhost:5005/posts/${post._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserLiked(
          response.data.userLiked || post.likes.includes(user.userId)
        );
        setLikesCount(response.data.likesCount || post.likes.length);
        setComments(response.data.comments || []);
      }
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  }, [post._id, post.likes, user.userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });

  const handleLike = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("User not authenticated");
        return;
      }

      const response = await axios.put(
        `http://localhost:5005/posts/${post._id}/like`,
        { userId: user._id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedPost = response.data;
      setUserLiked(updatedPost.likes.some((like) => like._id === user._id));
      setLikesCount(updatedPost.likes.length);
    } catch (error) {
      console.log("Error liking the post: ", error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("User not authenticated");
        return;
      }
      if (!commentText.trim()) {
        console.log("Comment cannot be empty");
        return;
      }
      const response = await axios.post(
        `http://localhost:5005/posts/${post._id}/comments`,
        {
          text: commentText,
          userName: user.userName,
          profileImageUrl: user.profilepic,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const newComment = response.data.comment;

        if (newComment) {
          setComments((prevComments) => [...prevComments, newComment]);
        } else {
          const commentsArray = response.data.comments;
          if (Array.isArray(commentsArray)) {
            setComments(commentsArray);
          }
        }
        setCommentText("");
      }
    } catch (error) {
      console.log("Error posting comment: ", error);
    }
  };

  return (
    <Card>
      <div>
        <div className="flex px-5">
          {post.userId ? (
            <a
              href={`/profile/${post.userId.userName}`}
              className="cursor-pointer"
            >
              <UserAvatar
                profileImageUrl={post.userId.profilepic}
                isOnline={true}
                size="w-20 h-20"
                indicatorPosition="top-14 start-16"
              />
            </a>
          ) : (
            <div> User information is unavailable</div>
          )}

          <div className="grow">
            <p>
              <a
                href={`/profile/${
                  post.userId ? post.userId.userName : "defaultUser"
                }`}
                className="font-semibold px-2 cursor-pointer hover:underline"
              >
                {post.userId ? post.userId.userName : "Anonymous"}
              </a>
              shared a post
            </p>

            <p className="text-sm text-gray-500 px-2">{timeAgo}</p>
          </div>
        </div>

        <div>
          <p className="my-2 text-sm text-gray-500">{post.desc}</p>
          {/* post and image rendering */}

          {post.img && (
            <div className="rounded-md overflow-hidden">
              <img
                src={post.img}
                alt="Post"
                className="post-image md:w-1/2 sm:full"
              />
            </div>
          )}
          <div className=" flex">
            {/* like button */}
            <div>
              <button onClick={handleLike} className="flex gap-2 px-4">
                <ion-icon
                  name={userLiked ? "thumbs-up-sharp" : "thumbs-up-outline"}
                ></ion-icon>
                {likesCount}
              </button>
            </div>

            {/* comment button */}
            <div>
              <button onClick={toggleComments} className="flex gap-2 px-4">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </button>
            </div>

            {/* share button */}
            <div>
              <button className="flex gap-2 px-2 items-center">
                <ion-icon name="share-social-outline"></ion-icon>
              </button>
            </div>
          </div>
          {/* comment space */}
          {showComments && (
            <div className="flex mt-4 gap-3">
              <div>
                <UserAvatar
                  profileImageUrl={user.profilepic}
                  isOnline={true}
                  size="w-11 h-11"
                  indicatorPosition="bottom-0 right-0"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <textarea
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                  className="w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2"
                  placeholder="Leave a comment"
                ></textarea>
                <button
                  type="submit"
                  onClick={handleCommentSubmit}
                  className={
                    "w-1/4 flex justify-center ml-auto py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none button "
                  }
                >
                  Post
                </button>
              </div>
            </div>
          )}

          <div className="mt-2">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-200 p-2 rounded mb-1 flex items-start"
              >
                <UserAvatar
                  profileImageUrl={comment.profileImageUrl}
                  isOnline={true}
                  size="w-16 h-16 md:w-20 md:h-20"
                  indicatorPosition="absolute top-14 left-16"
                  className="group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500"
                />
                <div className="ml-2 flex-1">
                  <p className="text-sm text-gray-600">{comment.text}</p>
                  <p className="text-sm text-gray-600">{comment.userName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Card />
    </Card>
  );
}

//props validation
CardForOthers.propTypes = {
  post: PropTypes.object.isRequired,
};
export default CardForOthers;
