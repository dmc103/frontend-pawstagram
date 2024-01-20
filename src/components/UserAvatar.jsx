import profilePic from "../assets/samprofPic.jpg"



function UserAvatar() {
  return (
    <div>
   <div className="rounded-full w-12 overflow-hidden">
   <img src={profilePic} alt="Profile" />
   </div>
   
   </div>
  )
}

export default UserAvatar