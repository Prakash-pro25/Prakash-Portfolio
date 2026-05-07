import { motion } from "framer-motion";
import InfiniteLetters from "./InfiniteLetters";


export default function SkillsTimeline({component}) {

  const {title,description,elements}=component;

  return (
    <div className=" text-white h-full flex flex-col items-center py-1">

      {/* Title */}
      <h1 className="text-4xl font-bold bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text  text-transparent mb-4">
       {title}
      </h1>
      <InfiniteLetters className="text-center max-w-2xl text-gray-300 mb-16">
       {description}
      </InfiniteLetters>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl flex justify-between items-start">

        {/* Line */}
        <div className="absolute top-8 left-0 w-full h-[2px] bg-linear-to-r from-pink-500 to-violet-500"></div>

        {elements.map((item, index) => (
          <div key={item.id} className="relative flex flex-col items-center w-1/5">

            {/* Number Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="z-10 bg-linear-to-r from-pink-500 to-violet-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full border-4 border-white"
            >
              {item.id}
            </motion.div>

            {/* Vertical Line */}
            <div className="w-[2px] h-16 bg-white"></div>

            {/* Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className="bg-neutral-900 rounded-2xl p-5 shadow-lg text-center w-44"
            >
              {/* Icon */}
          <motion.div 
              className="text-5xl text-black p-5 rounded-xl 
shadow-[0_10px_20px_rgba(0,0,0,0.5)] 
bg-linear-to-r from-pink-500 to-violet-500 flex justify-center items-center">
                <img src={item.icon} alt="" className="h-15" />
                
              </motion.div>
  


              {/* Title */}
              <h2 className="font-bold bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text  text-transparent">{item.title}</h2>

              {/* Description */}
              <p className="text-sm text-gray-300 mt-2">
                {item.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}