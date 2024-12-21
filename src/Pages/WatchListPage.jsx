import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import WatchLists from "../Components/WatchLists";

const WatchListPage = () => {
    return (
        <div>
            <header className="sticky top-0 z-10">
                <Navbar></Navbar>
            </header>
            <main>
                <section className="w-11/12 mx-auto py-5">
                <WatchLists></WatchLists>
                </section>
            </main>
            <footer className="py-10">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default WatchListPage;