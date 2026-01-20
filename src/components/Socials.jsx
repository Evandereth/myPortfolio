import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Socials(){
    return(
        <>
        <div className="w-full h-30 ">

            <div className="w-full p-2 border rounded-tr-2xl rounded-tl-2xl border-dashed">
                <h1 className="name text-xl font-bold">
                    CONTACT ME
                </h1>
            </div>

            <div className=" p-5 w-full flex flex-row justify-center items-center gap-3 text-sm">
                <button className="w-25 h-8 border flex items-center justify-center rounded-sm p-2 hover:bg-black hover:text-white transition duration-500">
                    <a href="https://github.com/evandereth" className="flex flex-row items-center justify-center gap-1">
                        <FaGithub /> <span>Github</span>
                    </a>
                </button>
                <button className="w-25 h-8 border flex items-center justify-center rounded-sm text-[#0063cc] hover:bg-[#0063cc] hover:text-white transition duration-500">
                    <a href="https://www.linkedin.com/in/ogunledun-oluwatobi/" className="flex flex-row items-center justify-center gap-1">
                        <FaLinkedin/> <span>LinkedIn</span>
                    </a>
                </button>

                <button className="w-25 h-8 border flex items-center justify-center rounded-sm text-green-500 hover:bg-green-500 hover:text-white transition duration-500">
                    <a href="wa.me/+2348111087058" className="flex flex-row items-center justify-center gap-1">
                        <FaWhatsapp /> <span>Whatsapp</span>
                    </a>
                </button>

                <button className="w-25 h-8 border flex items-center justify-center rounded-sm text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-500">
                    <a href="mailto:oluwatobiogunledun@gmail.com" className="flex flex-row items-center justify-center gap-1">
                        <FaEnvelope /> <span>Email</span>
                    </a>
                </button>
            </div> 
        </div>
        </>
    )
}