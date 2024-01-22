import profilePic from "../../assets/samprofPic.jpg"



function UserAvatar() {
  return (
    <div>
   <div className="rounded-full w-14 h-14 overflow-hidden">
   
   <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
   </div>
   
   </div>
  )
}

export default UserAvatar