import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MyReviewsLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10'>
                <Navbar></Navbar>
            </header>
            <main>
               <section className='w-11/12 mx-auto py-5'>
                hello my reviews
               </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyReviewsLayout;