import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ReviewDetailsPage = () => {
    const reviewDetails = useLoaderData();
    const {gameName,description,rating,thumbnail,name,email,genres} = reviewDetails;
    const handleWatchList = () =>{
        fetch("http://localhost:5000/watch_lists",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(reviewDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <header className="sticky top-0 z-10">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto py-5">

                <section>
                    <div className="w-full max-w-sm mx-auto bg-base-300 p-3">
                        <figure className="w-full">
                            <img src={thumbnail} alt={gameName} className="w-full h-64 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">Name:{name}</h2>
                            <h2 className="card-title text-lg font-bold">Email:{email}</h2>
                            <h2 className="card-title text-xl font-bold">{gameName}</h2>
                            <p className="text-md text-gray-700">{description}</p>
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                    <span className="text-yellow-500">★</span>
                                    <span className="ml-1">{rating}</span>
                                </div>
                            </div>
                            <h2 className="text-lg font-xl">Category: {genres}</h2>
                            <button onClick={handleWatchList} className="btn btn-accent rounded-none mt-4">Add to WatchList</button>
                        </div>
                    </div>
                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ReviewDetailsPage;