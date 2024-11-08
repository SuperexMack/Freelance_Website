import { Navbar } from "../Navbar/Navbar";

export function UserData() {
    const inputBoxValue = "rounded-md p-3 w-full bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium border-2 border-white";
    const labelValue = "text-lg font-semibold text-gray-400 mb-2 ";
    const textAreaStyle = "rounded-md p-3 w-full bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium border-2 border-white";

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen w-full flex flex-col items-center space-y-6 px-4 py-10">
                <h1 className="text-center text-4xl font-extrabold text-white mb-10">
                    User Data Center
                </h1>
                <div className="w-full max-w-3xl rounded-lg shadow-lg p-8 space-y-6">
                    <div>
                        <label className={labelValue}>Topic</label>
                        <input className={inputBoxValue} placeholder="Enter the Topic" />
                    </div>

                    <div>
                        <label className={labelValue}>Title</label>
                        <input className={inputBoxValue} placeholder="Enter the Title" />
                    </div>

                    <div>
                        <label className={labelValue}>Description</label>
                        <textarea placeholder="Enter Description" className={textAreaStyle} rows={6} />
                    </div>

                    <div>
                        <label className={labelValue}>Resources</label>
                        <textarea placeholder="Enter the Resources" className={textAreaStyle} rows={4} />
                    </div>

                    <div>
                        <label className={labelValue}>Name</label>
                        <input className={inputBoxValue} placeholder="Enter the Name" />
                    </div>

                    <button className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold text-lg transition duration-300 ease-in-out">
                        Submit Manually
                    </button>


                    <button className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold text-lg transition duration-300 ease-in-out">
                        Submit Via AI verification
                    </button>
                </div>
            </div>
        </>
    );
}
