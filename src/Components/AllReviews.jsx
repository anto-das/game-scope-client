import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewsCard from './AllReviewsCard';

const AllReviews = () => {
    const data = useLoaderData();
    const [reviews,setReviews] = useState(data);
    const handleSortWithRating= () => {
    const sortedRating = [...reviews].sort((a,b) => a.rating - b.rating);
    setReviews(sortedRating);
    }
    const handleSortWithYear = () => {
     const sortedYears = [...reviews].sort((a,b) => b.published - a.published);
     setReviews(sortedYears);
    }

    const handleFilterWithRPG = (value) =>{
      const genresValue = data.filter( review => review.genres === value);
      setReviews(genresValue)

    }
    const handleFilterWithFPS = (value) =>{
     const genresValue = data.filter( review => review.genres === value)
     setReviews(genresValue);
    }
    const handleFilterWithAction = (value) =>{
     const genresValue = data.filter(review => review.genres === value);
     setReviews(genresValue);
    }
    return (
        <div className='space-y-5'>
          <div className={`dropdown dropdown-bottom w-full`}>
  <div 
  tabIndex={0} 
  role="button" 
  className="rounded-none btn btn-accent m-1 w-full text-xl font-bold">Sortify</div>
  <ul tabIndex={0}
  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 rounded-none shadow">
    <li>
      <a 
      onClick={handleSortWithRating} className='hover:bg-accent rounded-none'>Sorting With Rating</a>
      </li>
    <li><a onClick={handleSortWithYear} className='hover:bg-accent rounded-none'>Sorting With Year</a></li>
  </ul>
</div>



          <div className={`dropdown dropdown-bottom w-full mb-3`}>
  <div 
  tabIndex={0} 
  role="button" 
  className="rounded-none btn btn-warning m-1 w-full text-xl font-bold">Filter by genres</div>
  <ul tabIndex={0}
  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 rounded-none shadow">
    <li>
      <a 
      onClick={()=>handleFilterWithRPG("Role-Play-First")} className='hover:bg-warning rounded-none'>Filter With RPG</a>
      </li>
    <li>
      <a 
      onClick={()=>handleFilterWithFPS("First-Person-Shooter")} className='hover:bg-warning rounded-none'>Filter With FPS</a>
      </li>
    <li>
      <a 
      onClick={()=>handleFilterWithAction("Action-Adventure")} className='hover:bg-warning rounded-none'>Filter With Action-Adventure</a>
      </li>
  </ul>
</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {
                reviews.map(review => <AllReviewsCard key={review._id} review={review}></AllReviewsCard>)
              }
            </div>
        </div>
    );
};

export default AllReviews;