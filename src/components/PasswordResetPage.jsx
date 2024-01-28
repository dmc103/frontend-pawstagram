import { useState } from "react"
import { useNavigate } from "react-router-dom";

function PasswordResetPage() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("");

    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        console.log("handleReset");
        if (newPassword === confirmPassword) {
            setPasswordStatus("Password reset. Redirecting to login page...");
            setTimeout(() => {
                navigate("login");
            }, 3000);
        } else {
            setPasswordStatus("Passwords didn't match. Please try again.");
        }
        
    }

    const handleBack = (e) => {
        e.preventDefault();
        console.log("handleBack");
        navigate("/login");
    }
  return (
    <div className="bg-pawBgFour h-screen flex flex-col items-center justify-center">
        <h2 className="text-center text-white mb-12 font-medium text-3xl mt-12 hover:text-indigo-800">PASSWORD RESET</h2>
        <div className="bg-amber-50 p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-md">
        <form className="flex flex-col">
            <label htmlFor="old-pw">
                <input 
                className="w-full p-3 bg-amber-50 rounded-2xl mb-10 border border-slate-700  hover:bg-amber-200"
                placeholder="Old Password"
                type="text" 
                name="old-pw" 
                id="old-pw" 
                value={oldPassword} 
                onChange={(e) => {setOldPassword(e.target.value)}}
                autoFocus/>
            </label>

            <label htmlFor="new-pw">
                <input 
                className="w-full p-3 border border-slate-700 bg-amber-50 rounded-2xl mb-3 hover:bg-amber-200"
                placeholder="New Password"
                type="password" 
                name="new-pw" 
                id="new-pw" 
                value={newPassword} 
                onChange={(e) => {setNewPassword(e.target.value)}}/>
            </label>

            <label htmlFor="confirm-pw">
                <input 
                className="w-full p-3 border border-slate-700 bg-amber-50 rounded-2xl mb-2 hover:bg-amber-200"
                placeholder="Confirm New Password"
                type="password" 
                name="confirm-pw" 
                id="confirm-pw" 
                value={confirmPassword} 
                onChange={(e) => {setConfirmPassword(e.target.value)}}/>
            </label>

            <p className="text-red-600 font-medium blink_me">{passwordStatus}</p>

            <br />
            <button
            className="mt-5 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-2xl mb-14 hover:text-white hover:h-12 border-2 border-amber-100" onClick={handleResetPassword}>Reset Password</button>
            <button
        className="h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-2xl mb-8 hover:text-white hover:h-12 border-2 border-amber-100" onClick={handleBack}>Back</button>
        </form>
        </div>
        
    </div>  
  )
}

export default PasswordResetPage