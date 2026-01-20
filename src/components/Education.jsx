export default function Education(){
    return(
        <>
        <div>
            <div className="w-full p-2 border rounded-tr-2xl rounded-tl-2xl border-dashed">
                <h1 className="name text-xl font-bold uppercase">
                    Education
                </h1>
            </div>

            <div className="p-5 flex flex-row justify-between items-start">
                <div>
                    <h1 className="font-bold text-xl">
                        Olabisi Onabanjo University
                    </h1>
                    <p className="font-extralight text-gray-400">
                        Mechanical Engineering
                    </p>
                </div>

                <div className="bg-gray-50 w-[40%] h-15 px-4 rounded-xl flex justify-center items-center gap-1 cursor-pointer">
                    2017 - 2023
                </div>
            </div>
        </div>
        </>
    )
}