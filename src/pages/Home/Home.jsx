import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <div className='bg-red-50 mb-5'>
                <div className='w-4/5 mx-auto md:flex items-center gap-5'>
                    <div className='text-7xl font-bold text-teal-800 py-10'>
                        <h3>Choose the Tasty Recipes</h3>
                    </div>
                    <div className='md:w-2/3'>
                        <div>
                            <img className='w-full py-5 rounded-full' src="https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto'>
                <p className='text-center text-5xl font-bold text-teal-800 mt-24 mb-16'>Chefs</p>
                <div className='md:grid md:grid-cols-3'>
                    {
                        chefs.map(chef => <Cards key={chef.id} chef={chef}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;