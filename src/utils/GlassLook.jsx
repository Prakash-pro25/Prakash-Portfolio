import { motion, useMotionValue, useSpring } from "framer-motion";


 

export default function GlassDiv({className,className1,children})
{
    
   
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

    return(
   
    
          <motion.div
            onMouseMove={handleMouseMove}
            className={`
                ${className}
              relative  
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-[0_20px_50px_rgba(0,0,0,0.8)]
              overflow-hidden
               `}
          >
    
            {/* Mouse Glow Light */}
            <motion.div  style={{
                left: smoothX,
                top: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className={`
                 ${className1}

                pointer-events-none
                absolute 
                bg-blue-400/30
                blur-3xl rounded-full
              `}
            />
    
            {/* Content */}
            <div className={`relative z-10`}>{children}</div>
    
          </motion.div>
    
      
    )

}