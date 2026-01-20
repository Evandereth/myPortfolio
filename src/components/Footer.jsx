import { FaEnvelope, FaGithub,  FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return(
        <>
            <footer className="w-full h-[7em] rounded-3xl  flex flex-col justify-center items-center">
                <div className="border-b w-full">
                    <div className="flex flex-row justify-center items-center space-x-3 py-2">   
                        <a href="https://www.linkedin.com/in/ogunledun-oluwatobi/" className="cursor-pointer">< FaLinkedin /></a>
                        <a href="mailto:oluwatobiogunledun@gmail.com" className="cursor-pointer">< FaEnvelope /></a>
                        <a href="https://github.com/evandereth" className="cursor-pointer">< FaGithub /></a>       
                    </div>
                </div>
                <div className="py-2">
                    &copy; 2026 Built with ❤️ || Evander.
                </div>
            </footer>
        </>
    )
}