import { Link } from "react-router-dom";


const AllReviewsCard = ({review}) => {
    const {gameName,thumbnail,rating,published,_id} = review;
    return (
        <div className="bg-base-100 shadow-md">
  <figure>
    <img
      src={thumbnail}
      alt={gameName} className="h-64"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {gameName} </h2>
    <h3 className="text-md font-semibold">Rating: {rating} </h3>
    <p className="text-lg font-bold">Published : {published} </p>
    <Link to={`/reviews/${_id}`}>
    <div className="w-full">
      <button className="btn btn-accent w-full rounded-none">Explore now</button>
    </div>
    </Link>
  </div>
</div>
    );
};

export default AllReviewsCard;