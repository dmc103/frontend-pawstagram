import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import NavBar from "./NavBar";
import CardForPost from "./CardForPost";
import UserAvatar from "./UserAvatar";

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

        <div>
        

        <div className="w-full max-w-XL bg-white border border-gray-200 rounded-lg shadow dark:bg-pawBgFour dark:border-emerald-300">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>

        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">

    <UserAvatar />

        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.userName}</h5>

        <span className="text-sm text-gray-500 dark:text-gray-100">
       {user.bio}
        </span>

        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  bg-indigo-600  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
        </div>
    </div>
</div>

        
        </div>
       
        <CardForPost />
            <Card>Our Posts should be displayed here</Card>
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
