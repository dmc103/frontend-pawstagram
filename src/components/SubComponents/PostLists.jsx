import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardForSharedPost from "./CardForSharedPost";

function PostLists() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      console.log("user is not logged in");
    } else if (user._id) {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5005/user/${user._id}/posts`
          );
          console.log(response.data);
          setPosts(response.data.posts);
        } catch (error) {
          console.log("Error retreiving posts:", error);
        }
      };
      fetchPosts();
    }
  }, [user, navigate]);

  if (!posts || posts.length === 0) {
    return <div>No posts available yet or unable to fetch posts.</div>;
  }

  return (
    <div>
      <h1>Here are your posts</h1>
      {posts.map((post) => (
        <CardForSharedPost key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostLists;
