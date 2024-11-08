import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export function Landing() {
    return (
        <>
            <Navbar></Navbar>
            <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 w-full flex justify-center items-center flex-col space-y-6 text-center px-4 md:px-6">
                <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-100 leading-tight max-w-3xl"> The Freelancing Hub</h1>
                <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-xl"> Empowering Freelancers with AI-Driven Success</p>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg text-white text-lg sm:text-xl md:text-2xl font-semibold"><Link to="/chat">Explore Opportunities</Link> </button>
            </div>
        </>
    );
}``
