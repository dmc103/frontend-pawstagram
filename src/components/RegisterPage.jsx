import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [ email, setEmail ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState ('');
    const [ registerSuccess, setRegisterSuccess ] = useState(false);
    const navigate = useNavigate();
    


    const handleSubmit = async(event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match, try again");
            return;
        }

        try {
          const response = await axios.post('http://localhost:5005/auth/register', {
            email,
            userName,
            firstName,
            lastName,
            password,
            confirmPassword
        });
        console.log(response.data);
        setRegisterSuccess(true);

        setTimeout(() => 
            navigate('/login'), 2000);


        } catch (error) {
          if (error.response) {
            console.log('Register error :', error.response.data);
            alert(error.response.data.message);
          } else if (error.request) {
            console.log('Register error :', error.request);
            alert('An error occurred while submitting the form');
          } else {
            console.log('Error: ', error.message);
            alert('Registration failed. Please try again.');
          }

        }
            
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="max-w-md w-full space-y-8 p-10 bg-teal-200 rounded-xl shadow-lg z-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-900 ">
          WELCOME
        </h2>
        <p className="mt-2 text-center text-sm text-indigo-700">{registerSuccess ? 'REGISTRATION SUCCESSFUL' : 'PLEASE REGISTER HERE'}</p>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="username"
              name="username"
              id="username"
              className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <input
              type="firstname"
              name="firstname"
              id="firstname"
              className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              type="lastname"
              name="lastname"
              id="lastname"
              className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
             
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full p-3 border border-gray-300 bg-amber-50 rounded-md"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />


            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Have an account? 
                  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">  Log In</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  )
}

export default RegisterPage