import { useContext, useState } from "react";
import Card from "./Card";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";
import "ionicons";
import { formatDistanceToNow } from "date-fns";

function CardForSharedPost({ post }) {
  const { user } = useContext(UserContext);
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };

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
  console.log("this is the post", post);

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

          <p className="text-sm text-gray-500 px-2">{timeAgo}</p>
        </div>
      </div>

      <div>
        <p className="my-2 text-XL text-gray-500">{post.desc}</p>

        {/* post and image rendering */}
        {post.img && (
          <div className="rounded-md overflow-hidden">
            <img src={post.img} alt="shared content" />
          </div>
        )}

        <div className=" flex mt-4">
          {/* like button */}
          <div>
            <button className="flex gap-2 items-center">
              <ion-icon name="thumbs-up-outline">29</ion-icon>
            </button>
          </div>

          {/* comment button */}
          <div>
            <button
              onClick={toggleComments}
              className="flex gap-2 px-4 items-center"
            >
              <ion-icon name="chatbubble-outline">4</ion-icon>
            </button>
          </div>

          {/* share button */}
          <div>
            <button className="flex gap-2 px-2 items-center">
              <ion-icon name="share-social-outline">5</ion-icon>
            </button>
          </div>
        </div>

        {/* comment space */}
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

      <Card />
    </div>
  );
}

//props validation
CardForSharedPost.propTypes = {
  post: PropTypes.object,
};

export default CardForSharedPost;
