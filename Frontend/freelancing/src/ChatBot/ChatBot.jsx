import "../App.css";

export function ChatBox() {
    const userStyle = "text-blue-400 font-semibold"; 
    const botMessageStyle = "text-gray-300"; 

    return (
        <>
            <div className="h-screen w-full bg-gray-900 flex flex-col justify-center items-center space-y-6 p-6">
                <h1 className="text-center text-[40px] font-extrabold text-gray-100">Ask The Bot</h1>
                
                <div className="bg-gray-800 shadow-lg border ele border-gray-700 h-[600px] overflow-y-scroll w-[700px] p-6 space-y-8 text-[18px] rounded-lg custom-scrollbar">
                    <p><span className={userStyle}>@Mack -</span> <span className={botMessageStyle}>Bc kirat ne bola karne ka to karne ka</span></p>
                    <p><span className={userStyle}>@Rahul -</span> <span className={botMessageStyle}>Hi Kiran</span></p>
                    <p><span className={userStyle}>@Rahul -</span> <span className={botMessageStyle}>Ghar mai maa behan nahi hai kya !!</span></p>
                    <p><span className={userStyle}>@Mack -</span> <span className={botMessageStyle}>Lol</span></p>
                    <p><span className={userStyle}>@Rahul -</span> <span className={botMessageStyle}>HI</span></p>
                    <p><span className={userStyle}>@Kiran -</span> <span className={botMessageStyle}>Hello</span></p>
                    <p><span className={userStyle}>@kirat -</span> <span className={botMessageStyle}>Head Down and code</span></p>
                  
                </div>

                <div className="w-[700px] space-y-3">
                    <input
                        className="p-3 w-full bg-gray-700 border border-gray-600 text-gray-200 font-semibold text-[16px] rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Type your message here..."
                    />
                    <button className="w-full bg-blue-500 p-3 rounded-lg font-semibold text-[16px] text-gray-100 transition duration-200 ease-in-out hover:bg-blue-600">
                        Ask Bot
                    </button>
                </div>
            </div>
        </>
    );
}
