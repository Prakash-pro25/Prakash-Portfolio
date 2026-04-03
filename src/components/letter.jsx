import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Letter4({ className }) {

  const sentences = [
    "Full Stack Developer (MERN)",
    "React Developer",
    "Node.js Backend Developer",
    "Mobile App Developer(reactNative)",
    "UI/UX Designer",
    "saftware tester",

  ];

  const [index, setIndex] = useState(0);

  // Change sentence every 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 6000);

  }, [index]); 
  

  return (
    <motion.h1
      key={index} // important for re-animation
      className={`${className || "text-4xl"} font-bold overflow-hidden whitespace-nowrap border-r-4 border-blue-500`}
      initial={{ width: 0 }}
      animate={{ width: "fit-content" }}
      transition={{ duration: 2, ease: "linear" }}
    >
      {sentences[index]}
    </motion.h1>
  );
}