import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import NavBar from "./NavBar";
import CardForPost from "./CardForPost";

function UserProfile() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) {
        
        // TODO: Add a loading spinner
        return <div>Loading user profile...</div>;
    }

    return (

        <div className="flex mt-4 max-w-4xl mx-auto gap-6">
        <div className="w-1/3">

        <NavBar/>
            
        </div>
        <div className="grow">
        <CardForPost />
            <Card>Our Posts should be displayed here</Card>
            <h1 className="text-xl font-bold mt-2">Profile of {user.userName}</h1>
            <p className="text-sm text-gray-600">Bio: {user.bio}</p>
        </div>
            
        </div>


       















        // <div className="container mx-auto">
        //     <div className="flex flex-col items-center">
        //         <img className="rounded-full w-20 h-20" src={user.profilePic || 'default-profile.png'} alt="Profile" />
        //         <h1 className="text-xl font-bold mt-2">{user.userName}</h1>
        //         <p className="text-sm text-gray-600">{user.bio}</p>
        //         <div className="flex mt-4">
        //             <div className="text-center mr-8">
        //                 <span className="font-bold text-lg">
        //                     {user.posts?.length || 0}
        //                 </span>
        //             </div>
        //             <div className="text-center">
        //                 <span className="font-bold text-lg">
        //                     {user.followers?.length || 0}
        //                 </span>
        //             </div>
        //         </div>

        //         <div>
        //             {user.posts?.map((post) => (
        //                 <img className ="w-full" src={post.imageUrl} alt="post" key={post._id} />
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
}

export default UserProfile;
