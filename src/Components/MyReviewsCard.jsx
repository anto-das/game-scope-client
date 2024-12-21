import { Link } from "react-router-dom";

const MyReviewsCard = ({review}) => {
    const {gameName,description,rating,thumbnail,name,email,genres,_id} = review;
    return (
        <div className="w-full max-w-sm mx-auto bg-base-300 p-3">
        <figure className="w-full">
            <img src={thumbnail} alt={gameName} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-lg font-bold">Name:{name}</h2>
            <h2 className="card-title text-lg font-bold">Email:{email}</h2>
            <h2 className="card-title text-xl font-bold">Game:{gameName}</h2>
            <p className="text-md text-gray-700">{description}</p>
            <div className="flex items-center space-x-2">
                <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{rating}</span>
                </div>
            </div>
            <h2 className="text-md font-semibold">Category:{genres}</h2>
            <div className="grid gap-3 grid-cols-2">
            <Link className="btn btn-accent rounded-none mt-4" to={`/updateReview/${_id}`}>
            <button >Update</button>
            </Link>
            <button className="btn btn-warning rounded-none mt-4">Delete</button>
            </div>
        </div>
    </div>
    );
};

export default MyReviewsCard;