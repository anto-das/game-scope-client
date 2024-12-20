

const AllReviewsCard = ({review}) => {
    const {gameName,thumbnail,rating,published} = review;
    return (
        <div className="card card-compact bg-base-100 shadow-md">
  <figure>
    <img
      src={thumbnail}
      alt={gameName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {gameName} </h2>
    <h3 className="text-md font-semibold">Rating: {rating} </h3>
    <p className="text-lg font-bold">Published : {published} </p>
    <div className="w-full">
      <button className="btn btn-accent w-full">Explore now</button>
    </div>
  </div>
</div>
    );
};

export default AllReviewsCard;