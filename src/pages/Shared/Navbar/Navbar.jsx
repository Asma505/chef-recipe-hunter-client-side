import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <div className='flex items-center justify-around text-center w-4/5 mx-auto'>
            <p className='bg-teal-800 text-white text-3xl p-5 font-bold'>Cook House</p>
            
            <ActiveLink to='/' ><p className='p-5 text-white font-bold'>Home</p></ActiveLink>
            
            <ActiveLink to='/blog' ><p className='p-5 text-white font-bold'>Blog</p></ActiveLink>
            
            <button className='py-5 px-3 bg-white text-teal-800 rounded-full font-bold'><Link to='/login'>Login</Link></button>
        </div>
    );
};

export default Navbar;