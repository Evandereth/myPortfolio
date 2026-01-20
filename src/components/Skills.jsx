import {  FaChess, FaCss3, FaHtml5, FaVideo, FaWalking } from "react-icons/fa";

export default function Skills(){
    return(
        <>
        <div className="w-full h-30">
            <div className="w-full p-2 border rounded-tr-2xl rounded-tl-2xl border-dashed">
                <h1 className="name text-xl font-bold uppercase">
                    Programming skills
                </h1>
            </div>

            <div className="w-full p-5 flex flex-row justify-center items-center gap-3 text-sm">
                <button className="w-25 h-8 gap-2 border flex items-center justify-center rounded-sm p-2 text-[#ffa200]">
                        <FaHtml5 /> <span>HTML</span>
                </button>
                <button className="w-25 h-8 gap-2 border flex items-center justify-center rounded-sm text-[#0088cc]">
        
                    <FaCss3/> <span>CSS</span>
                </button>
                <button className="w-25 h-8 border flex gap-2 items-center justify-center rounded-sm text-[#f4e400]">
                    <FaWalking /> <span>JavaScript</span>
                </button>
            </div> 
        </div>
        </>
    )
}