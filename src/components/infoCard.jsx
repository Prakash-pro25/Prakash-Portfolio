import GlassDiv from "../utils/GlassLook"
import { FaGraduationCap } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { MdMenuBook } from "react-icons/md";
import Spline from "@splinetool/react-spline";




export default function InfoCard()
{
  
    return(
        <div className="my-10 relative overflow-hidden ">
            <h1 className="text-4xl text-white text-center mb-5"  >Hi! There 👋</h1>
            
            <div className=" grid grid-cols-3 grid-rows-2 h-130 w-full px-20 gap-6 ">
                <GlassDiv className="rounded-2xl flex justify-center items-center " className1="w-[200px] h-[200px]">
                    <div className="relative p-6  overflow-hidden">

  {/* Icon Background */}
  <GoGoal className="text-8xl opacity-10 absolute top-2 right-5" />

  {/* Title */}
  <h2 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent">
     Goals
  </h2>

  {/* Content */}
  <p className="text-gray-100 leading-relaxed">
    To become a skilled Full Stack Developer and build scalable, real-world web applications. I aim to continuously improve my technical skills, contribute to innovative projects, and grow as a professional in the software development industry.
  </p>

</div> 
                </GlassDiv>

                <GlassDiv className="rounded-2xl flex justify-center items-center" className1="w-[200px] h-[200px]">
                
                 <div className="relative p-6  overflow-hidden">

  {/* Icon Background */}
  <FaGraduationCap className="text-8xl opacity-10 absolute top-2 right-5" />

  {/* Title */}
  <h2 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent">
     Education
  </h2>

  {/* Content */}
  <p className="text-gray-100 leading-relaxed">
    Currently pursuing a <span className="font-semibold text-blue-700">B.Tech in Information Technology</span> at 
    <span className="inline-flex items-center gap-2 mx-1">
      <img src="/col.png" alt="college" className="h-5" />
      <span className="font-semibold ">DSEC (Autonomous)</span>
    </span>.
    Focused on building a strong foundation in software development, programming, and modern web technologies.
  </p>

</div> 
                    
                    </GlassDiv>
                    
                 
                       <div className="row-span-2 col-span-1 ">

                       </div>
                      
                <GlassDiv className="col-span-2 rounded-2xl" className1="w-[200px] h-[200px]">
                    <div className="relative p-6  overflow-hidden">

  {/* Icon Background */}
  <MdMenuBook className="text-8xl opacity-10 absolute top-2 right-5" />

  {/* Title */}
  <h2 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent">
    Learning Style / Habits
  </h2>

  {/* Content */}
  <p className="text-gray-100 leading-relaxed">
I learn by watching YouTube tutorials, exploring official documentation, and applying knowledge through real-world projects to continuously improve my skills.  </p>

  {/* Content */}
  <p className="text-gray-100 leading-relaxed">
Consistent coding practice, exploring new technologies, and continuously improving skills. Focused on discipline, creativity, and growth every day.
  </p>

</div> 
                    </GlassDiv>
    
            
            </div>
            <div className=" z-500 absolute -top-20 h-200 w-250 right-0 translate-x-70">
            <Spline scene="https://prod.spline.design/OLSz83NyW29RvzeB/scene.splinecode"  />
            </div>
        </div>
    )

}


/*  */