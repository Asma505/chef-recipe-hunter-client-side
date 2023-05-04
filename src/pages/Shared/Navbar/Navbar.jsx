import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <div className='flex items-center justify-around text-center w-4/5 mx-auto gap-1'>
            <p className='bg-teal-800 text-white text-3xl p-5 font-bold italic'>Cook House</p>

            <ActiveLink to='/' ><p className='md:p-5 text-white font-bold'>Home</p></ActiveLink>

            <ActiveLink to='/blog' ><p className='md:p-5 text-white font-bold'>Blog</p></ActiveLink>


            {user &&
                <div>
                    <img data-tooltip-id="my-tooltip"
                        data-tooltip-content={user.displayName}
                        data-tooltip-place="top" className='w-16' src={user.photoURL} alt="" />

                    <Tooltip id="my-tooltip"></Tooltip>
                </div>
            }


            {user ?
                <button onClick={handleLogOut} className='py-5 px-3 bg-white text-teal-800 rounded-full font-bold'>LogOut</button> :

                <Link to='/login'><button className='py-5 px-3 bg-white text-teal-800 rounded-full font-bold'>Login</button></Link>}
        </div>
    );
};

export default Navbar;