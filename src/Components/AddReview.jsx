import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const handleSelect = select => {
    setValue(select);
  }
  const handleAddReview = event => {
    event.preventDefault()
    const gameName = event.target.name.value;
    const thumbnail = event.target.thumbnail.value;
    const userRating = event.target.rating.value;
    const rating = parseInt(userRating);
    const published = event.target.published.value;
    const description = event.target.description.value;
    const genres = event.target.genres.value;
    const email = user.email;
    const name = user.displayName;
    if (rating > 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please submit a number out of 10",
      });
      return;
    }
    const addData = { gameName, thumbnail, rating, published, description,genres, email, name };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Your review added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          event.target.reset();
        }
      })
  }
  return (
    <div className="py-20">
      <h2 className="text-center text-2xl underline italic text-accent font-bold">Add Your Game Review</h2>
      <form onSubmit={handleAddReview} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Name</span>
          </label>
          <input type="text" name="name" placeholder="Game name" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail URL</span>
          </label>
          <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Game Rating" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Published Year</span>
          </label>
          <input type="text" name="published" placeholder="Published date" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genres:</span>
          </label>
          <div className="dropdown">
            <input tabIndex={0} defaultValue={value} name="genres" role="button" className="input input-bordered rounded-none w-full" required/>
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
            className="textarea textarea-bordered rounded-none rounded-none w-full"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="w-full rounded-none btn btn-accent">Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;