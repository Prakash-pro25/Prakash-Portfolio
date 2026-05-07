import { motion } from "framer-motion";



const container = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      repeat: Infinity,
    }
  }
};

const letter = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 }
};

export default function InfiniteLetters({children ,className}) {
  return (
    <motion.h1
      variants={container}
      initial="initial"
      animate="animate"
      className={className}
    >
      {children.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}