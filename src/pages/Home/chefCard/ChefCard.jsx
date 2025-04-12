import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const ChefCard = ({ recipe }) => {
  const {id,chefPicture,chefName,experience,totalRecipes,likes} = recipe;
  
  return (
    <div >
    
      <div className="  rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-72 rounded-t-lg"
          f
          src={chefPicture}
          alt="chefName"
        />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2">{chefName}</div>
          <p className="text-gray-700 text-base mb-2">
            Years of experience: {experience}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Total Recipes: {totalRecipes}
          </p>
          <p className="text-gray-700 text-base mb-2">👌Likes: {likes}</p>
          <div className="px-6 py-4">
           <Link to={`/recipe/${id}`}>
           <button className="w-full btn-shadow">
              Details More
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
