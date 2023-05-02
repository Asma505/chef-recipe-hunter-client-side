import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const submit = form.submit.value;
        console.log(email, password);
    }
    return (
        <div className='w-2/3 mx-auto my-28 bg-gray-300 py-10'>
            <h3 className='text-center text-3xl font-bold'>Please Login</h3>
            
            <form onSubmit={handleLogin}>
                <div className='text-left w-1/2 mx-auto'>
                    <label>Email</label>
                    <input className='block w-full mx-auto mb-5 pl-1' type="email" name="email" id="" placeholder=' Your Email' required />


                    <label>Password</label>
                    <input className='block w-full mx-auto mb-5 pl-1' type="password" name="password" id="" placeholder=' Enter Password' required />
                </div>

                <div className='text-center'>
                    <button className='w-1/2 mx-auto bg-teal-800 text-white py-2' type="submit" name='submit'>Login</button>
                </div>
            </form>

            <div className='text-center'>
                <button className='bg-teal-800 text-white py-2 w-1/2 mx-auto my-3'> Login with Google </button>
            </div>

            <div className='text-center'>
                <button className='bg-teal-800 text-white py-2 w-1/2 mx-auto'> Login with Github </button>
            </div>
            <div className='text-center my-3 font-bold'>
                <p>Don't Have an Account? <Link className='text-teal-800' to="/register">Register</Link></p>
            </div>            
        </div>
    );
};

export default Login;