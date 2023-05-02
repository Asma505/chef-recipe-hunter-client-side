import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState('');
    
    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const submit = form.submit.value;
        form.reset('');
        console.log(name, email, password, photo);

        setError('');

        if(password.length < 6){
            setError('The password is less than 6 characters');
            return;
        }
    }

    return (
        <div className='w-2/3 mx-auto my-28 bg-gray-300 py-10'>
            <h3 className='text-center text-3xl font-bold'>Please Login</h3>
            
            <form onSubmit={handleRegister}>
                <div className='text-left w-1/2 mx-auto'>
                    <label>Name</label>
                    <input className='block w-full mx-auto mb-5 pl-1' type="text" name="name" id="" placeholder=' Your Name'/>
                    
                    <label>Email</label>
                    <input className='block w-full mx-auto mb-5 pl-1' type="email" name="email" id="" placeholder=' Your Email' required />


                    <label>Password</label>
                    <input className='block w-full mx-auto mb-5 pl-1' type="password" name="password" id="" placeholder=' Enter Password' required />

                    <label>Photo URL</label>
                    <input className='block w-full mx-auto mb-5 pl-1' type="text" name="photo" id="" placeholder=' Enter Photo URL'/>
                </div>
                <p className='text-center text-red-600 my-3'>{error}</p>
                <div className='text-center'>
                    <button className='w-1/2 mx-auto bg-teal-800 text-white py-2' type="submit" name='submit'>Register</button>
                </div>                
            </form>
            
            <div className='text-center my-3 font-bold'>
            <p>Already Have an Account? <Link className='text-teal-800' to="/login">Login</Link></p>
            </div>            
        </div>
    );
};

export default Register;