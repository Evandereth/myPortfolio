export default function Certification(){
    return(
        <>
        <div>
            <div className="w-full p-2 border rounded-tr-2xl rounded-tl-2xl border-dashed">
                <h1 className="name text-xl font-bold uppercase">
                    Certification
                </h1>
            </div>

            <div className="p-5 flex flex-col justify-between items-start gap-3">

                <ul className="list-disc flex-col gap-5 p-3">
                    <li className="font-bold text-lg">B.Engr. Mechanical Engineering <br />
                        <span className="font-extralight text-gray-400 text-sm">
                        Second Class Upper Division - 4.3CGPA</span>
                    </li>

                    <li className="font-bold text-lg">National Youth Service Corp <br />
                        <span className="font-extralight text-gray-400 text-sm">
                        Rivers State - June 2025</span>
                    </li>
                </ul>                
            </div>
        </div>
        </>
    )
}