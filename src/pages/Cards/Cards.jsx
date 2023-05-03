import React from 'react';


const Cards = ({ chef }) => {

    const { picture, name, years_of_experience, num_of_recipes, likes } = chef;
    return (
        <div>
            <div className="card w-80 glass mb-5">
                <figure><img className='w-80' src={picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Years of Experience: {years_of_experience} Years</p>
                    <p>Number of Recipes: {num_of_recipes} Recipes</p>
                    <div className='flex justify-between items-center'>
                        <div className="card-actions ">
                            <button className="bg-teal-800 text-white p-3 rounded-lg">View Recipes</button>
                        </div>
                        <div>
                            <p>Likes {likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;