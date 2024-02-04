import Card from "./Card";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";
import "ionicons";

function CardForOthers({ post }) {
  console.log("this is the frontend post", post.userId);

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (!post.userId) {
    return (
      <Card>
        <p>Post data is curently unavailable</p>
      </Card>
    );
  }

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });
  return (
    <Card>
      <div>
        <div className="flex px-5">
          <a
            href={`/profile/${post.userId?.userName}`}
            className="cursor-pointer"
          >
            <UserAvatar
              profileImageUrl={post.userId?.profilepic}
              isOnline={true} // You might need additional logic to determine if the user is online
              size="w-20 h-20"
              indicatorPosition="top-14 start-16"
            />
          </a>
          <div className="grow">
            <p>
              <a
                href={`/profile/${post.userId?.userName}`}
                className="font-semibold px-2 cursor-pointer hover:underline"
              >
                {post.userId?.userName || "Unknown User"}
              </a>
              shared a post
            </p>
            <p className="text-sm text-gray-500 px-2">{timeAgo}</p>
          </div>
        </div>

        <div>
          <p className="my-2 text-xl text-gray-500">{post.desc}</p>
          {post.img && (
            <div className="rounded-md overflow-hidden">
              <img src={post.img} alt="Post" className="w-1/2" />
            </div>
          )}
          <div>
            <button
              onClick={toggleComments}
              className="flex gap-2 px-4 items-center"
            >
              <ion-icon name="chatbubble-outline">4</ion-icon>
            </button>
          </div>
        </div>
        {showComments && (
          <div className="flex mt-4 gap-3">
            <div>
              <UserAvatar isOnline={true} />
            </div>
            <textarea
              className="w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2"
              placeholder="Leave a comment"
            ></textarea>
          </div>
        )}
      </div>
    </Card>
  );
}

//props validation
CardForOthers.propTypes = {
  post: PropTypes.object.isRequired,
};
export default CardForOthers;
