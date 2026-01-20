import { FaGlobeEurope } from "react-icons/fa"

export default function Profile(){
    return(
        <>
        <div className=" w-full h-full flex justify-center items-center gap-2 p-3">
            <div className="w-[50%] p-3nrelative overflow-hidden">
                <h2 className="text-lg font-semibold">
                    OLUWATOBI
                </h2>
                <h1 className="text-3xl font-bold">
                    OGUNLEDUN
                </h1>
                <p className="text-sm">
                    (he/him)
                </p>
            </div>

            <div className=" w-[50%] h-40 flex flex-col justify-between items-end border-l border-dotted rounded-xl">
                
                <h2 className="name w-full font-semibold text-right text-xl border-b pb-1 mt-2">
                    Front-End
                </h2>
                <h1 className="name text-2xl text-right font-bold">
                    WEB <br/> DEVELOPER
                </h1>

                <div className="w-full">
                    <p className="name flex flex-row justify-center items-center gap-3 bg-black/90 text-white text-center w-full py-1 rounded-xl backdrop-blur-md cursor-pointer">
                        <span><FaGlobeEurope className="animate-globe"/></span>
                        Since 2023
                    </p>
                </div>
            </div>
        </div>
            
        </>
    )
}