import "./UserFeed.css";
import CardForSharedPost from "./CardForSharedPost";

function UserFeed() {
  return (
    <div className="feed">
      UserFeed
      <div className="feedWrap">
        <CardForSharedPost />
      </div>
    </div>
  );
}

export default UserFeed;
