import pfp from "../img/pfp.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Profile(){
    return(
        <>
        <div>
            <div className="w-50 h-50 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={pfp} alt="brand picture" />
            </div>

            <div className="w-full bg-red-200 flex flex-col justify-between items-end">
                <h2 className="text-4xl">
                    Evander
                </h2>
                <h1 className="w-full text-3xl font-bold my-5">
                    KOLs MANAGER
                </h1>

                <div className="w-full flex flex-row justify-center items-center gap-2 bg-amber-200">
                    <p>Socials</p>

                    <div className=" icon flex gap-2 flex-wrap">
                        <button className="w-15 h-5 md:w-30 border rounded-lg px-2 py-0.5 cursor-pointer">
                            <a href="" className="w-full flex justify-center items-center gap-2">
                                <FaXTwitter />
                               <p className="hidden md:block">X(Twitter)</p> 
                            </a> 
                        </button>

                        <button className="w-15 h-5 md:w-30 border rounded-lg px-2 py-0.5 cursor-pointer">
                            <a href="" className="w-full flex justify-center items-center gap-2">
                                <FaTelegramPlane className="text-[#0088cc]" />
                                <p className="hidden md:block">Telegram</p>
                            </a>
                        
                        </button>

                        <button className="w-15 h-5 md:w-30 border rounded-lg px-2 py-0.5 cursor-pointer">
                            <a href="" className="w-full flex justify-center items-center gap-2">
                                <FaDiscord className="text-[#5865f2]" />
                                <p className="hidden md:block"> Discord</p>
                            </a>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
            
        </>
    )
}