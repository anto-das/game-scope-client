import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewsCard from './AllReviewsCard';

const AllReviews = () => {
    const reviews = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {
                reviews.map(review => <AllReviewsCard key={review._id} review={review}></AllReviewsCard>)
              }
            </div>
        </div>
    );
};

export default AllReviews;