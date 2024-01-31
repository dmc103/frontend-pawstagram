import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import CardForSharedPost from "./CardForSharedPost";

function SharedPostsList({ userId, refreshTrigger }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/posts/timeline/${userId}`
        );
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

  // to render the list of posts
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
  refreshTrigger: PropTypes.func.isRequired,
};

export default SharedPostsList;
