import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const diffToast = () => {
        toast.success("Login Successfully!", {
            position: "top-left"
        });
        toast.error("Invalid Credentials!", {
            position: "top-center"
        });
        toast.warn("Logged in from another device!", {
            position: "top-right"
        });
        toast.info("Ghost Login!", {
            position: "bottom-center"
        });
    }
    return (
        <div className='main-div'>
            <h2>Welcome to Login Page</h2>
            <button className='btn btn-primary px-5' onClick={diffToast}>Login</button>
            <ToastContainer />
        </div>
    )
}

export default Login