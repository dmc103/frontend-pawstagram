// import { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function ResetPassword() {
//   const [password, setPassword] = useState();
//   const navigate = useNavigate();
//   const { id, token } = useParams();

//   axios.defaults.withCredentials = true;
//   const handleSubmit = async (email) => {
//     try {
//       const response = await axios.post("/reset-password/:id/:token", {
//         email: email,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="bg-indigo-500 opacity-90 sm: min-h-screen flex flex-col items-center justify-center">
//       <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg max-w-2xl sm: m-auto">
//       <h2 className="text-center text-slate-900 mb-6 font-medium text-3xl hover:text-indigo-800">Reset Password</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>New Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               autoComplete="off"
//               name="password"
//               className="w-full p-3 bg-slate-50 rounded-lg mb-5 border border-slate-700 hover:bg-slate-300"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="mt-5 h-10 bg-gradient-to-r from-indigo-600 to-sky-400 w-300 rounded-lg mb-2 hover:text-white hover:font-semibold hover:border-1 border-amber-100" >
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;
