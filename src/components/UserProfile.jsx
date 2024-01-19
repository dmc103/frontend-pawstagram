import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Redirect } from "react-router-dom";



function UserProfile() {

    const { user } = useContext(UserContext);

    if (!user) {
        return <Redirect to="/login" />;
    }


  return (
    <div className="container mx-auto">
        <div className="flex flex-col items-center">
        <img className="rounded-full w-20 h-20" src={user.profilePic} alt="Profile" />
        <h1 className="text-xl font-bold mt-2">{user.userName}</h1>
        <p className="text-sm text-gray-600">{user.bio}</p>
        <div className="flex mt-4">
            <div className="text-center mr-8">
                <span className="font-bold text-lg">
                    {user.posts.length}
                </span>
            </div>
            <div className="text-center">
                <span className="font-bold text-lg">
                    {user.followers.length}
                </span>
            </div>
        </div>

        <div>
            {user.posts.map((post) => (
                <img className ="w-full" src={post.imageUrl} alt="post" key="post._id" />
            ))}
        </div>
        </div>
    </div>

  );
}

export default UserProfile
