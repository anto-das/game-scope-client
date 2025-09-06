import React from 'react';

const Slide = ({img,title,description,link}) => {
    return (
      <div className="w-full relative">
      <img
          src={img} className='w-full' />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center font-bold text-white bg-black opacity-50">{title}</h1>
            <p className="text-center w-1/2 mx-auto my-2 text-gray-200 text-lg font-semibold"> {description} </p>
            <a href={`${link}`} target="_blank" className="btn opacity-40 hover:opacity-100">Explore Now</a>
          </div>
      </div>
    );
};

export default Slide;