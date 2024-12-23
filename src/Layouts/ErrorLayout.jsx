import { Link } from "react-router-dom";

const ErrorLayout = () => {
    return (
        <div className="min-h-screen flex justify-center items-center mx-auto flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Game <span className="text-orange-500">Scope</span></h1>
            <p className="text-xl text-black py-2 font-bold">404 Not Found</p>
            <p className="text-black text-center">Lost in the vast web,<br/>
            Where you sought,there's only void— <br/>
            Nothingness awaits.</p>
            <Link className="btn mt-4 bg-white hover:bg-blue-500 hover:text-white border-blue-500 text-blue-400" to={"/"}>Back Home</Link>
        </div>
    );
};

export default ErrorLayout;