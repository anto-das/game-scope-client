import AddReview from "../Components/AddReview";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const AddReviewPage = () => {
    return (
        <div>
            <header className="sticky top-0 z-10">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto">
                <AddReview></AddReview>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddReviewPage;