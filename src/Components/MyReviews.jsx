import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyReviewsCard from "./MyReviewsCard";


const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    const email = user?.email;

    useEffect(()=>{
       if(email){
        fetch(`http://localhost:5000/myreviews?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
       }
    },[email])
    return (
        <div>
            <h1 className="text-2xl font-bold">Your Reviews: {reviews.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
                {
                    reviews.map(review => <MyReviewsCard key={review._id} review={review}></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;