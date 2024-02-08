import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import CardForSharedPost from "./CardForSharedPost";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function SharedPostsList({ userId, refreshTrigger }) {
  const [posts, setPosts] = useState([]);

  console.log(" Here are the user's posts:", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/timeline/${userId}`);
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (userId) {
      fetchPosts();
    }
  }, [userId, refreshTrigger]);

  // check if there are no posts and render a message if so
  if (posts.length === 0) {
    return (
      <Card>
        <p>loading...</p>
      </Card>
    );
  }

  // to render the list of user's posts
  return (
    <div className="post-container">
      {posts.map((post) => (
        <CardForSharedPost key={post._id} post={post} />
      ))}
    </div>
  );
}

//props validation
SharedPostsList.propTypes = {
  userId: PropTypes.string.isRequired,
  refreshTrigger: PropTypes.bool.isRequired,
};

export default SharedPostsList;
