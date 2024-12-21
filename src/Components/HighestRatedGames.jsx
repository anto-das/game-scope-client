import { useLoaderData } from "react-router-dom";
import HighestRatedGameCard from "./HighestRatedGameCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const HighestRatedGames = () => {
    const {toggle} = useContext(AuthContext);
    const reviews = useLoaderData();
    return (
        <div>
            <h1 className={toggle? "text-2xl font-bold text-gray-100":"text-2xl font-bold"}>Highest Rated Games  : {reviews.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-3">
                {
                    reviews.map(review => <HighestRatedGameCard key={review._id} review={review}></HighestRatedGameCard>)
                }
            </div>
        </div>
    );
};

export default HighestRatedGames;