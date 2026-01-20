export default function Alternative(){
    return(
        <>
        <div className="w-full">
            <div className="w-full p-2 border rounded-tr-2xl rounded-tl-2xl border-dashed">
                <h1 className="name text-xl font-bold uppercase">
                    Technical skills
                </h1>
            </div>

            <div className="w-full p-5">
                <ul className=" w-full list-disc text-sm px-3 flex flex-col gap-2">
                    <li>
                        API integration.
                    </li>
                    <li>
                        Debugging.
                    </li>
                    <li>
                        Deployment & Hosting.
                    </li>
                    <li>
                        Time Management and Prioritization.
                    </li>
                    
                </ul>
            </div>
        </div>
        </>
    )
}