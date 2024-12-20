import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AllReviewsPage = () => {
    return (
        <div>
            <header className="sticky top-0 z-10">
                <Navbar></Navbar>
            </header>
            <main>
               <section className="w-11/12 mx-auto py-10">
               <Outlet></Outlet>
               </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllReviewsPage;