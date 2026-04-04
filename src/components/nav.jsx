import { motion } from "framer-motion"
import { BiDownArrow, BiDownload } from "react-icons/bi"



export default function Navbar(){
    return(
    
       <motion.div
       initial={{opacity:0, y:-100}}
       animate={{opacity:1, y:0}}
       transition={{duration:1}}
      
       
       className=" top-0 left-0 sticky py-2 z-1000">
        <div className=" relative top-0 left-0 w-full h-10  rounded-3xl
         bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_20px_50px_rgba(0,0,0,0.8)]
          overflow-hidden">
        </div>
        <nav className="text-white flex justify-around items-center w-full absolute top-0 left-0 my-2 h-10">
             <h1 className="text-4xl text-white font-bold">Prakash.<span className="font-bold text-4xl text-blue-700">dev</span></h1>
             <ul className="flex gap-10 text-xl font-bold">
                 <li className="hover:underline hover:text-blue-600 transition duration-200">Home</li>
                 <li className="hover:underline hover:text-blue-600 transition duration-200">About</li>
                 <li className="hover:underline hover:text-blue-600 transition duration-200">Skills</li>
                 <li className="hover:underline hover:text-blue-600 transition duration-200">Projects</li>
                 <li className="hover:underline hover:text-blue-600 transition duration-200">Contact</li>
             </ul>
             <div className="flex  gap-5 justify-center items-center ">
            {/* <h1 className="text-3xl">|</h1> */}
            <hr className="h-8 w-0.5 bg-blue-700 border-blue-600"/>
            <button className="bg-linear-to-r from-pink-500 to-violet-500 flex font-bold rounded-3xl p-2 justify-center items-center gap-2"><span>download <sup className="text-[10px]">(resume)</sup></span><BiDownload size={20}/></button>
             </div>

        </nav>
        
        
        </motion.div>
           
    )

}
