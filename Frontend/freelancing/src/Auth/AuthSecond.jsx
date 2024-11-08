import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";

export function AuthSecond() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [Name,setName] = useState("")
    const [loading, setLoading] = useState(false);

    const inputStyle = "border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 bg-white";
    const navigate = useNavigate();
    
    const changeClient = () => {
        navigate("/register");
    };

    const handleRegister = async () => {
        if (!/^\d{10}$/.test(phoneNumber)) {
            toast.error("Please enter a valid 10-digit phone number.", { position: "top-right" });
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:9000/v1/UserRegister", {
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                country: country,
            });
            const getToken = response.data.token;
            const getResponse = response.data.msg;
            if (getResponse === "User Already available with same email") {
                setLoading(false);
                toast.error(getResponse, { position: "top-right" });
                return;
            }
            localStorage.setItem("authorization", "Bearer " + getToken);
            setLoading(false);
            toast.success(getResponse, { position: "top-right" });
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.log("Something went wrong during registration " + error);
            setLoading(false);
            toast.error("Something went wrong during registration.");
        }
    };

    return (
        <>
        <Navbar></Navbar>
            {loading ? (
                <div className="h-screen flex justify-center items-center bg-gray-100">
                    <h1 className="text-gray-800 text-4xl font-semibold animate-pulse">
                        Loading...
                    </h1>
                </div>
            ) : (
                <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                    <div className="w-full sm:w-[400px] p-8 sm:p-10 bg-white rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                            Login
                        </h2>
                        
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className={inputStyle + " mb-4"} type="email" />
                        <input value={Name} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Name" className={inputStyle + " mb-4"} type="tel" />
                        <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className={inputStyle + " mb-4"} type="text" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={inputStyle + " mb-6"} type="password" />
                        <input value={Gender} onChange={(e) => setPassword(e.target.value)} placeholder="Gender" className={inputStyle + " mb-6"} type="password" />

                        <div className="space-y-4">
                            <button onClick={changeClient} className="w-full py-3 bg-gray-200 rounded-md text-gray-600 font-medium hover:bg-gray-300 transition ease-in-out duration-200">Don't have an account? Sign-up</button>

                            <button onClick={handleRegister} className="w-full py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition ease-in-out duration-200">Login</button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
}
