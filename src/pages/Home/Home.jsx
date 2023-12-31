import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import beef from '../../assets/pexels-photo-1731535.jpeg';
import kabab from '../../assets/pexels-photo-2233729.jpeg';
import biryani from '../../assets/pexels-photo-14731635.jpeg';
import { Link } from 'react-router-dom';


const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-gray-three.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            {/* For Header */}
            <div className='bg-red-50 mb-5'>
                <div className='w-4/5 mx-auto md:flex items-center gap-5'>
                    <div className='text-7xl font-bold text-teal-800 py-10'>
                        <h3>Choose the Tasty Recipes</h3>
                    </div>
                    <div className='md:w-3/4'>
                        <div>
                            <img className='w-full py-10 rounded-full' src="https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* For 6 Cards */}
            <div className='w-10/12 mx-auto'>
                <p className='text-center text-5xl font-bold text-teal-800 mt-24 mb-16'>Chefs</p>
                <div className='md:grid md:grid-cols-3'>
                    {
                        chefs.map(chef => <Cards key={chef.id} chef={chef}></Cards>)
                    }
                </div>
            </div>
            {/* Hottest Recipes section */}
            <div className='text-center w-10/12 mx-auto mb-32'>
                <p className='text-5xl font-bold text-teal-800 mt-24 mb-16'>Today's New Hottest Recipes Available Now</p>
                <div className='md:flex md:justify-between'>
                    <div className='w-80'>
                        <img className='rounded-full' src={beef} alt="" />
                        <p className='text-3xl font-bold text-teal-800 my-5'>Beef Rezala</p>
                    </div>
                    <div className='w-80'>
                        <img className='rounded-full' src={kabab} alt="" />
                        <p className='text-3xl font-bold text-teal-800 my-5'>Shik Kabab</p>
                    </div>
                    <div className='w-80'>
                        <img className='rounded-full' src={biryani} alt="" />
                        <p className='text-3xl font-bold text-teal-800 my-5'>Biryani</p>
                    </div>
                </div>
            </div>
            {/* For Newsletter Section*/}
            <div className='bg-teal-800 md:flex md:justify-around w-2/3 mx-auto mb-32 py-16 px-10 rounded-full text-center'>
                <h3 className='text-white text-3xl font-bold'>Subscribe to Newsletter</h3>
                <form action="">
                    <input className='rounded-full mr-3 pl-3 my-3' type="email" />
                    <Link className='bg-white p-1 text-teal-800 font-bold rounded-full' to='#'>Submit</Link>
                </form>
            </div>
        </div>
    );
};

export default Home;