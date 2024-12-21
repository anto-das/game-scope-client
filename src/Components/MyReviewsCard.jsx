import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewsCard = ({review,reviews,setReviews}) => {
    const {gameName,description,rating,thumbnail,name,email,genres,_id} = review;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myreviews/${_id}`,{
                    method:"DELETE",
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          const reminingData = reviews.filter(review => review._id !== _id)
                          setReviews(reminingData);
                    }
                    
                })
            }
          });
    }
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
            <button onClick={handleDelete} className="btn btn-warning rounded-none mt-4">Delete</button>
            </div>
        </div>
    </div>
    );
};

export default MyReviewsCard;