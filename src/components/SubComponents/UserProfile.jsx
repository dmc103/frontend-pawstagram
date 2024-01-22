import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import NavBar from "./NavBar";
import CardForPost from "./CardForPost";
import UserAvatar from "./UserAvatar";
import firstPost from "../../assets/bestfriend.jpg";
import logo from "../../assets/pawstagram.jpg"

function UserProfile() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const catSpinner = "https://media4.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif?cid=ecf05e47adpu5m1dewuaidkpywvo7tzpou00hmrzxlduqhw9&ep=v1_gifs_search&rid=giphy.gif&ct=g"

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) {
        
        // TODO: Add a loading spinner
        return (
            <img src={catSpinner} alt="cat-spinner" />
            );
    }

    return (



        <div className="flex mt-4 max-w-4xl mx-auto gap-6">
       
        <div className="w-1/4">

        <div className="flex mt-2 gap-1 rounded-full w-14 h-14">
        <img src={logo}/>
        <span className="text-sm mt-4 hidden md:block text-orange-300 font-bold">Pawstagram</span>
        </div>

        <NavBar/>
            
        </div>
        <div className="w-3/4">

        <div>
        

        <div className="w-full max-w-XL bg-white border border-gray-200 rounded-lg shadow dark:bg-pawBgFour dark:border-emerald-300">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>

        </button>

        {/* dropdown upper right-hand corner */}
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
    

    <UserAvatar/>

        
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
            <Card>
            <div className="flex gap-2">
                <div>
                    <UserAvatar />
                </div>
                <div className="grow">
                    <p><span className="font-semibold px-2">{user.userName}</span>shared a post</p>
                    <p className="text-sm text-gray-500 px-2">1 hour ago</p>
                </div>

                <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                    </svg>
                    </button>

                    

                </div>

            </div>
            <div>
                <p className="my-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor nec. Viverra tellus in hac habitasse. Sed vulputate odio ut enim. </p>

                <div className="rounded-md overflow-hidden">
                <img src={firstPost} alt="bestfriend"/>
                </div>

                <div className=" flex mt-4">

                {/* like button */}
                <div>
                <button className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg> 29</button>
                </div>


                {/* comment button */}
                <div>
                <button className="flex gap-2 px-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
                </svg>
                4
                </button>
                </div>



                {/* share button */}
                <div>
                    <button className="flex gap-2 px-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                    5
                    </button>
                </div>

                </div>

                {/* comment space */}
                <div className="flex mt-4 gap-3">
                <div>
                <UserAvatar />
                </div>
                <textarea className="w-full grow p-3 h-15 border-2 border-gray-300 rounded-md mb-2" placeholder= "Leave a comment"></textarea>
                </div>

            </div>
            
            </Card>
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
