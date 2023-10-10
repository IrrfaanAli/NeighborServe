import React from 'react';

const ProviderCard = (props) => {
   
    const {name,category,icon}= props.item;
  return (
    <div className="my-2 mx-2 lg:my-4 lg:mx-4">
      <div className="card  bg-base-100 shadow-xl ">
        <figure className="px-2 pt-2">
          <img
            src={icon}
            alt="Category Icon"
            className=" w-12 lg:w-20"
          />
        </figure>
        <div className="card-body items-center text-center">
            
        <h2 className="card-title">{name}</h2>
            
          <h2 className="card-title">{category}</h2>
          
        </div>
      </div>
    </div>
  )
};

export default ProviderCard;