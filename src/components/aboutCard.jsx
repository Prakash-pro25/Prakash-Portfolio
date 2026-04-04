import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { ImOpt } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import  Letter4  from "./letter";

export default function UltraCard() {

   
  const domain=["full stack development","Mobile App Development","Software Testing"]

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="flex m-10 justify-center ">

      <motion.div
        onMouseMove={handleMouseMove}
        className="
          relative w-[1400px] h-[400px] rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_20px_50px_rgba(0,0,0,0.8)]
          overflow-hidden
        "
      >

        {/* Mouse Glow Light */}
        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="
            pointer-events-none
            absolute w-[200px] h-[200px]
            bg-blue-400/30
            blur-3xl rounded-full
          "
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-around h-full">

          <img
            src="/prakash.png"
            alt="profile"
            className="h-[490px] object-contain drop-shadow-2xl"
          />
          <div className="text-white font-bold w-[53%]">
           <h3 className="text-2xl font-serif">hello, I'm</h3>
           <h1 className="text-4xl">Prakash P</h1>
           <h2 className="text-3xl font-mono flex gap-1"><h2>and I'm a</h2><Letter4 name={domain} className="text-blue-700"/></h2>
           <br />
            <p>
                I’m a passionate and dedicated Developer, ready to contribute to building impactful and scalable solutions. <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">"With a strong focus on clean code, modern design, and user experience."</span> I’m eager to learn, adapt, and grow within a professional environment while bringing innovative ideas and consistent performance to your team.
            </p>
            <div className="text-4xl flex  gap-3 text-black mt-5 ">
                <FaLinkedin className="cursor-pointer hover:-translate-y-2 transition duration-300" />
                <FaSquareGithub className="cursor-pointer hover:-translate-y-2 transition duration-300"/>
                < MdEmail className="cursor-pointer hover:-translate-y-2 transition duration-300"/>
                </div>
          </div>

        </div>

      </motion.div>

    </div>
  );
}