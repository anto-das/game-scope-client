import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const data = useLoaderData();
    const { gameName, thumbnail, rating, published, description,genres, email, name , _id} = data;
      const handleSelect = select => {
        console.log(gameName)
        setValue(select);
      }
    const handleUpdateReview = event =>{
    event.preventDefault();
    const gameName = event.target.name.value;
        const thumbnail = event.target.thumbnail.value;
        const userRating = event.target.rating.value;
        const rating = parseInt(userRating);
        const published = event.target.published.value;
        const description = event.target.description.value;
        const genres = event.target.genres.value;
        if (rating > 10) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please submit a number out of 10",
          });
          return;
        }
        const updatedData = { gameName, thumbnail, rating, published, description,genres, email, name };
        
        fetch(`https://game-scope-server.vercel.app/myreviews/${_id}`,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    event.target.reset();
                    navigate("/")
            }
        })
    }
    return (
        <div className="py-20">
      <h2 className="text-center text-2xl underline italic text-accent font-bold">Update Your Game Review</h2>
      <form onSubmit={handleUpdateReview} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input 
          type="text"
           defaultValue={name}
             placeholder="Game name" className="input input-bordered rounded-none" required readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" defaultValue={email} placeholder="Game name" className="input input-bordered rounded-none" required  readOnly/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Name</span>
          </label>
          <input type="text" defaultValue={gameName} name="name" placeholder="Game name" className="input input-bordered rounded-none" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail URL</span>
          </label>
          <input type="text" defaultValue={thumbnail} name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" defaultValue={rating} name="rating" placeholder="Game Rating" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Published Year</span>
          </label>
          <input type="text" defaultValue={published} name="published" placeholder="Published date" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genres:</span>
          </label>
          <div className="dropdown">
            <input tabIndex={0} defaultValue={genres} name="genres" role="button" className="input input-bordered rounded-none w-full" required />
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a onClick={() => handleSelect("Action-Adventure")}>Action-Adventure</a></li>
              <li><a onClick={() => handleSelect("Role-Play-First")}>Role-Play-First</a></li>
              <li><a onClick={() => handleSelect("First-Person-Shooter")}>First-Person-Shooter</a></li>
            </ul>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Text your Description"
            defaultValue={description}
            className="textarea textarea-bordered 
            rounded-none rounded-none w-full"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="w-full rounded-none btn btn-accent">Update</button>
        </div>
      </form>
    </div>
    );
};

export default UpdateReview;