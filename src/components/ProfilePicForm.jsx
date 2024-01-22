import axios from "axios"
import {Image} from "cloudinary-react"
import {useState} from "react"

function ProfilePicForm() {
    
    const [imageSelected, setImageSelected] = useState("");

    const generic = "https://cdn-icons-png.freepik.com/128/2266/2266469.png?ga=GA1.1.343954775.1705490888&semt=ais"

    const uploadImage = () => {
        // console.log(files[0]);
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "wpb1f2jw");

        axios.post("https://api.cloudinary.com/v1_1/dl7j7kjhq/upload", formData)
        .then((response) => {
            console.log(response);
        })
    }
  return (
    <div>
        {<Image /> ? (
            <Image style={{height: "80px", borderRadius: "50%"}} cloudName="dl7j7kjhq" publicId="https://res.cloudinary.com/dl7j7kjhq/image/upload/v1705768204/suebzw7ygvloxbhfv1v0.png" />

        ) : (
            <img src={generic} alt="profile-pic" />
        )}

        {}
        
        <input type="file" onChange={(e) => {setImageSelected(e.target.files[0]);
        }}
        />
        <button style={{backgroundColor:"white"}} onClick={uploadImage}>Upload Image</button>

    </div>
  )
}

export default ProfilePicForm

// CLOUDINARY_NAME=dl7j7kjhq
// CLOUDINARY_KEY=477639569552816
// CLOUDINARY_SECRET=Kse2eWffFYKVFtLx42kgQ3Y1gqQ

