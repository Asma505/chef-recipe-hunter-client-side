import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-teal-800'>
            <div className='md:grid md:grid-cols-4 md:gap-3 w-4/5 mx-auto py-10'>
                <div className='text-white my-10 mb-3 col-span-2'>
                    <h3 className='text-3xl font-bold italic mb-3'>Cook House</h3>
                    <p className='text-xl font-bold mb-5'>We're Providing <br /> Everyday Fresh
                        and Tasty Foods.</p>
                    <div className='flex gap-10'>
                        <p><button><FaTwitter></FaTwitter></button></p>
                        <p><button><FaFacebookF></FaFacebookF></button></p>
                        <p><button><FaInstagram></FaInstagram></button></p>
                    </div>
                </div>
                <div className='text-white my-10'>
                    <h3 className='text-xl font-bold mb-3'>Explore</h3>
                    <p><Link to='#'>About Company</Link></p>
                    <p><Link to='#'>Our Services</Link></p>
                    <p><Link to='#'>Become a Seller</Link></p>
                    <p><Link to='#'>New Recipe</Link></p>
                    <p><Link to='#'>Contact</Link></p>

                </div>
                <div className='text-white my-10'>
                    <h3 className='text-xl font-bold mb-3'>Contact</h3>
                    <p className='mb-3'>house #27/b/5, road #104, gulshan-2, 1212</p>
                    <p className='underline underline-offset-8 mb-3'>Phone: 02 9893641 / 02 9889418</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
            <p className='text-center text-white py-5'><small>©Copyright of my website</small></p>
        </div>
    );
};

export default Footer;