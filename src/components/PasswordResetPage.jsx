import { useState } from "react"

function PasswordResetPage() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="bg-pawBgFour h-screen flex flex-col items-center justify-center">
        <h2 className="text-center text-white mb-12 font-medium text-3xl mt-12 hover:text-indigo-800">PASSWORD RESET</h2>
        <div className="bg-amber-50 p-10 shadow shadow-indigo-600/500">
        <form className="flex flex-col">
            <label htmlFor="old-pw">
                <input 
                className="w-full p-3 bg-amber-200 rounded-2xl mb-10 border border-slate-700  hover:bg-amber-50"
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
                className="w-full p-3 border border-slate-700 bg-amber-200 rounded-2xl mb-3 hover:bg-amber-50"
                placeholder="New Password"
                type="password" 
                name="new-pw" 
                id="new-pw" 
                value={newPassword} 
                onChange={(e) => {setNewPassword(e.target.value)}}/>
            </label>

            <label htmlFor="new-pw">
                <input 
                className="w-full p-3 border border-slate-700 bg-amber-200 rounded-2xl mb-10  hover:bg-amber-50"
                placeholder="Confirm New Password"
                type="password" 
                name="confirm-pw" 
                id="confirm-pw" 
                value={confirmPassword} 
                onChange={(e) => {setConfirmPassword(e.target.value)}}/>
            </label>
            <br />
            <button
            className="h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-2xl mb-14 hover:text-white hover:h-12">Reset Password</button>
            <button
        className="h-10 bg-gradient-to-r from-sky-400 to-indigo-600 w-300 rounded-2xl mb-8 hover:text-white hover:h-12">Back</button>
        </form>
        </div>
        
    </div>  
  )
}

export default PasswordResetPage