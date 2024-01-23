import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import Navbar from "./SubComponents/NavBar";

function UserProfile() {
  const { userName } = useParams();
  const { user } = useContext(UserContext);

  const spinner = "https://i.gifer.com/Xqg8.gif";

  console.log(`UserProfile for: ${userName}`);
  console.log("User is:", user);

  if (!user) {
    return <image src={spinner} />;
  }

  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <Navbar />
      <h1>{userName} Personal Profile</h1>
      <h1>{user.country}</h1>
    </div>
  );
}

export default UserProfile;
