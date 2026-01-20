import {  FaGitAlt, FaReact } from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri"

export default function Developer(){
    return(
        <>
        <div className="w-full h-30">
            <div className="w-full p-2 border rounded-tr-2xl rounded-tl-2xl border-dashed">
                <h1 className="name text-xl font-bold uppercase">
                    Developer Tools
                </h1>
            </div>

            <div className="w-full p-5 flex flex-row justify-center items-center gap-3 text-sm">
                <button className="w-30 h-8 gap-2 border flex items-center justify-center rounded-sm p-2 text-[#1aaff9]">
                        <RiTailwindCssFill /> <span>TailwindCSS</span>
                </button>
                <button className="w-30 h-8 gap-2 border flex items-center justify-center rounded-sm text-[#0088cc]">
        
                    <FaReact/> <span>ReactJS</span>
                </button>
                <button className="w-30 h-8 border flex gap-2 items-center justify-center rounded-sm text-[#ffa200]">
                    <FaGitAlt /> <span>Git</span>
                </button>
            </div> 
        </div>
        </>
    )
}