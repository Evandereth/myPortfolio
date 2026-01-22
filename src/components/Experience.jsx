import { GoDotFill } from "react-icons/go"
export default function Experience(){

    const experience = [
        {
            id:1,
            name: "ERRANDA ",
            title: "FrontEnd - Intern",
            time: "June 2024",
            achievements:["Implemented content  updates and UI changes without breaking existing functionality.", "Diagnosed and fixed UI bugs including layouts and their responsiveness to improve site stability and usability.", "Participated in Production deployment workflows, live updates."]
        },{
            id:2,
            name: "Andicox",
            title: "FrontEnd Dev",
            time: "December 2023",
            achievements:[" Built  and deployed responsive website features using HTML, CSS and JavaScript in a team based environment", " Standardized all output using a new, responsive,mobile first approach strategy, increasing mobile traffic by 25%", "Assessed UX & UI designs for technical feasibility.", "formulating and implementing improvements on cleanup processes and performance."]
        }
    ]
    return(
        <>
        <div className=" w-full flex flex-col gap-5 mt-3 md:flex-row md:flex-wrap md:justify-start items-center">
            
            {
                experience.map((exp)=>(
                    
                    <div key={exp.id} className="w-full lg:w-full xl:w-110 bg-white/80 border-white border min-h-90 p-5 rounded-2xl">

                        <div  className="flex flex-row justify-between item-center py-3 border-b">
                            <label className="w-[60%]">
                                <h1 className="name font-bold text-xl uppercase">
                                    {exp.name}
                                </h1>
                                <p className="font-extralight text-gray-500 text-sm">{exp.title} </p>
                            </label>

                            <div className="bg-gray-50 w-[40%] h-15 px-4 rounded-xl flex justify-center items-center gap-1 cursor-pointer border-dashed border">
                                
                                <h1 className="text-sm font-extralight flex justify-center items-center gap-1">{exp.time}</h1>
                            </div>

                        </div>

                        <div>
                            <ul className="list-disc flex flex-col gap-3 p-3">
                                {
                                    exp.achievements.map((list)=>(

                                        <li key={list} className="text-sm"> 
                                        {list}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                ))
            }
        </div>
        </>
    )
}






           