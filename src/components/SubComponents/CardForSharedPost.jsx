import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { UserContext } from "../../contexts/UserContext";
import UserAvatar from "./UserAvatar";
import PropTypes from "prop-types";
import "ionicons";

function CardForSharedPost({ post }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/posts/timeline/${user._id}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [user._id]);

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
        {/* this is where the shared post will be displayed */}

        {posts.map((post) => (
          <CardForSharedPost key={post._id} post={post} />
        ))}

        <p className="my-2 text-sm">{post.description}</p>

        <div className="rounded-md overflow-hidden">
          <img src={post.image} alt="post" />
        </div>

        <div className=" flex mt-4">
          {/* like button */}
          <div>
            <button className="flex gap-2 items-center">
              <ion-icon name="thumbs-up-outline">29</ion-icon>
            </button>
          </div>

          {/* comment button */}
          <div>
            <button className="flex gap-2 px-4 items-center">
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
