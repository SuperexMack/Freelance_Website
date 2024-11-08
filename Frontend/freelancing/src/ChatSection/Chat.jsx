import { useEffect, useRef } from "react"
import "../App.css"
export function Chat(){
    let clr = "text-red-500 font-bold"
    

    const keepScrolling = useRef(null)

    useEffect(()=>{
        keepScrolling.current?.scrollIntoView({ behavior: "smooth" });
    })

    return(
        <>
        <div className="bg-[#303339] ele h-screen w-full overflow-scroll font-medium flex flex-col p-10 text-white text-[20px] space-y-8">
        <p><span className={clr}>@Rahul -</span> Hi everyone!</p>
<p><span className={clr}>@Kiran -</span> Hello!</p>
<p><span className={clr}>@Kirat -</span> Let’s get those client projects done today!</p>
<p><span className={clr}>@Mack -</span> Bro, if Kirat says hustle, we hustle!</p>
<p><span className={clr}>@Rahul -</span> Hi Kiran, did you get that client approval?</p>
<p><span className={clr}>@Rahul -</span> Are we all set on deadlines?</p>
<p><span className={clr}>@Mack -</span> Haha, grind mode on!</p>
<p><span className={clr}>@Rahul -</span> Hello team!</p>
<p><span className={clr}>@Kiran -</span> What’s up?</p>
<p><span className={clr}>@Kirat -</span> Focus, guys. Let’s finish up strong.</p>
<p><span className={clr}>@Mack -</span> Gotta love the freelancing grind!</p>
<p><span className={clr}>@Rahul -</span> How’s it going, Kiran?</p>
<p><span className={clr}>@Rahul -</span> Ready to tackle the next project?</p>
<p><span className={clr}>@Mack -</span> On it!</p>
<p><span className={clr}>@Rahul -</span> Hello!</p>
<p><span className={clr}>@Kiran -</span> Morning!</p>
<p><span className={clr}>@Kirat -</span> Stay focused and get those hours in!</p>
<p><span className={clr}>@Mack -</span> Let’s crush these deadlines!</p>
<p><span className={clr}>@Rahul -</span> How are we on deliverables, Kiran?</p>
<p><span className={clr}>@Rahul -</span> Any feedback from the client yet?</p>
<p><span className={clr}>@Mack -</span> Freelancing life!</p>
<p><span className={clr}>@Rahul -</span> Good morning, team!</p>
<p><span className={clr}>@Kiran -</span> Hello there!</p>
<p><span className={clr}>@Kirat -</span> Let's wrap up those revisions quickly.</p>
<p><span className={clr}>@Mack -</span> Kirat called the shots, so let’s get it done!</p>
<p><span className={clr}>@Rahul -</span> How’s it going, Kiran?</p>
<p><span className={clr}>@Rahul -</span> Are we ready for the client meeting?</p>
<p><span className={clr}>@Mack -</span> All set here!</p>

        <div ref={keepScrolling}></div>
        </div>

       <div className="flex items-center p-3 bg-[#40444b]">
         <input placeholder="Enter your message" className="p-3 flex-grow rounded-lg bg-[#303339] text-white font-bold text-[20px]  outline-none"></input>
         <button className="p-2 rounded-lg bg-[#5865f2] text-white hover:bg-[#4752c4] ml-3">
                    <i className="fas fa-paper-plane w-[100px]" />
                </button>
       </div>
    
        </>
    )
}