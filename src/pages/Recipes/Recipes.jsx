import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Recipes = () => {    
    const chef = useLoaderData();
    const {picture, name, bio, likes, num_of_recipes, years_of_experience} = chef;
    return (
        <div className='bg-teal-600'>
            <div className='w-1/2 mx-auto pb-5 mb-6 text-white'>
                <img className='w-full mx-auto' src={picture} />
                <p className='text-3xl py-3 font-bold'>Name: {name}</p>
                <p className='font-semibold'>Number of Recipes: {num_of_recipes}</p>
                <p className='mb-3 font-semibold'>Years of Experience: {years_of_experience} Years.</p>
                <p className='text-xl mb-3'>Description: {bio}</p>
                <p className='text-xl font-bold text-center'>Likes: {likes}</p>
            </div>
        </div>
    );
};

export default Recipes;