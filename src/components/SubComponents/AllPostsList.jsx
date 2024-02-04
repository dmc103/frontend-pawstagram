import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CardForOthers from "./CardForOthers";

function AllPostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5005/posts/all");
        const sortedPosts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <Card>
        <p>No posts found</p>
      </Card>
    );
  }

  return (
    <div className="post-container">
      {posts.map((post) => (
        <CardForOthers key={post._id} post={post} />
      ))}
    </div>
  );
}

export default AllPostsList;
