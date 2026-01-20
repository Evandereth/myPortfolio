import Alternative from "./components/Alternative"
import Certification from "./components/Certification"
import Description from "./components/Description"
import Developer from "./components/Developer"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Interest from "./components/Interest"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import Socials from "./components/Socials"


function App() {

  return (
   <>
    <div className="w-[95%] mx-auto md:flex md:flex-row md:justify-center md:items-start md:gap-5 lg:gap-5">
      <div className="md:w-[60%]">
        <div className="w-full xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-5">
          <section className="components-bg xl:w-1/2 xl:h-60">
            <Profile />
          </section>
          <section className="components-bg xl:w-1/2 xl:h-60">
            <Description />
          </section>
        </div>
        

        <section className="components-bg">
          <Socials />
        </section>
        
        <section>
          <Experience />
        </section>

        <section className="components-bg">
        <Skills />
      </section>
        
      </div>

      <div className="md:w-[35%]">
        <section className="components-bg">
          <Education />
        </section>

        <section className="components-bg">
          <Certification />
        </section>

        <section className="components-bg">
         <Developer />
        </section>
        

        
        <section className="components-bg">
          <Alternative />
        </section>

        <section className="components-bg">
          <Interest />
        </section>

        

      </div>
      
      
    </div> 

    <Footer />
   </>
  )
}

export default App
