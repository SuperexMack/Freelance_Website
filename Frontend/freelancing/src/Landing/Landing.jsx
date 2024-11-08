import { Navbar } from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

export function Landing() {
    return (
        <>
        <Navbar></Navbar>
            <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 w-full flex justify-center items-center flex-col space-y-6 text-center px-6">
                <h1 className="font-extrabold text-[80px] text-gray-100 leading-tight">The Freelancing Hub</h1>
                <p className="font-medium text-[24px] text-gray-300 max-w-xl">Empowering Freelancers with AI-Driven Success</p>
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg text-white text-[24px] font-semibold"><Link to="/chat">Explore Opportunities</Link></button>
            </div>
        </>
    );
}
