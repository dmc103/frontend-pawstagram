// import axios from "axios";
// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
//     const [email, setEmail] = useState("");
//     const navigate = useNavigate();

//     const handleSend = async (e) => {
//         e.preventDefault();
//         try {
//             console.log("reset button clicked");
//             const response = await axios.post("http://localhost:5005/forgot-password", {email});
//             console.log("login: " + response.data);
//             if(res.status === 200) {
//                 navigate("/login")
//             }
//         } catch (err) {
//             console.log(err)
//         }        
//     }

//     const handleBack = (e) => {
//         e.preventDefault();
//         console.log("back button clicked");
//         navigate("/login");
//     }
//   return (
//     <div className="bg-pawBgFour sm: min-h-screen flex flex-col items-center justify-center">
//         <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl sm: m-auto">
//             <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">Forgot Password</h2>
//         <form className="flex flex-col">
//             <label htmlFor="email" className="font-semibold">
//                 Email address
//                 <input 
//                 className="w-full p-3 bg-amber-50 rounded-lg mb-5 border border-slate-700  hover:bg-amber-200"
//                 placeholder="Enter email"
//                 type="text" 
//                 name="email" 
//                 id="email" 
//                 value={email} 
//                 onChange={(e) => {setEmail(e.target.value)}}
//                 autoFocus/>
//             </label>

//             <button
//             className="mt-5 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100" onClick={handleSend}>Send</button>
//         </form>
//         <div className="text underline text-end">
//             <a href="/login">Back</a>
//             </div>
//         </div>
        
//     </div>  
//   )
}

export default ForgotPasswordPage