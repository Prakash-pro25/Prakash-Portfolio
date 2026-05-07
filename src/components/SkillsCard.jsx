import { LuBrainCircuit } from "react-icons/lu";
import GlassDiv from "../utils/GlassLook";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import InfiniteLetters from "./InfiniteLetters";
import  SkillsTimeline  from "./SkillsTimeline";


export default function SkillsCard()
{



     const icons =[
                   {src:"/icon/html-5-svgrepo-com.svg",alt:""},
                   {src:"/icon/css3.svg",alt:"css3"},
                   {src:"/icon/js-official-svgrepo-com.svg",alt:""},
                   {src:"/icon/typescript-logo-svgrepo-com.svg",alt:""},
                   {src:"/icon/git.svg",alt:""},
                   {src:"/icon/github2.svg",alt:""},
                   {src:"/icon/react-svgrepo-com.svg",alt:""},
                   {src:"/icon/tailwind-svgrepo-com.svg",alt:""},
                   {src:"/icon/vitejs-svgrepo-com.svg",alt:""},
                   {src:"/icon/node-js-svgrepo-com.svg",alt:""},
                   {src:"/icon/json-svgrepo-com.svg",alt:""},
                   {src:"/icon/npm-svgrepo-com.svg",alt:""},
                   {src:"/icon/nodejs-1-logo-svgrepo-com.svg",alt:""},
                   {src:"/icon/express-svgrepo-com.svg",alt:"",className:" bg-white rounded-2xl p-1"},
                   {src:"/icon/next-js-svgrepo-com.svg",alt:"",className:" bg-white rounded-2xl p-1"},
                   {src:"/icon/postman-icon-svgrepo-com.svg",alt:""},
                   {src:"/icon/docker-svgrepo-com.svg",alt:""},
                   {src:"/icon/mongodb-svgrepo-com.svg",alt:""},
                   {src:"/icon/mysql-logo-svgrepo-com.svg",alt:""},
                   {src:"/icon/pgsql-svgrepo-com.svg",alt:""},
                   {src:"/icon/sql-svgrepo-com.svg",alt:""},
                   {src:"/icon/java-logo-svgrepo-com.svg",alt:""},
                   {src:"/icon/python-svgrepo-com.svg",alt:"cpp"},
                   {src:"/icon/cpp.svg",alt:"cpp"},
                   {src:"/icon/linux-svgrepo-com.svg",alt:""},               
                   {src:"/icon/ubuntu-svgrepo-com.svg",alt:""},
                   {src:"/icon/vs-code-svgrepo-com.svg",alt:""},
                  
     ]


              const datas = [
  {
    title: "Frontend Development",
    description:
      "Technologies used to build user interfaces and interactive web applications.",
    elements: [
      
      {
        id: 3,
        title: "JavaScript",
        icon: "/icon/js-official-svgrepo-com.svg",
        desc: "Adds interactivity to web pages.",
      },
      {
        id: 4,
        title: "TypeScript",
        icon: "/icon/typescript-logo-svgrepo-com.svg",
        desc: "Typed superset of JavaScript.",
      },
      {
        id: 5,
        title: "React",
        icon: "/icon/react-svgrepo-com.svg",
        desc: "Library for building UI components.",
      },
      {
        id: 6,
        title: "Next.js",
        icon: "/icon/next-js-svgrepo-com.svg",
        className: "bg-white rounded-xl p-1",
        desc: "React framework for SSR & full-stack apps.",
      },
      {
        id: 7,
        title: "Tailwind CSS",
        icon: "/icon/tailwind-svgrepo-com.svg",
        desc: "Utility-first CSS framework.",
      },
      {
        id: 8,
        title: "Vite",
        icon: "/icon/vitejs-svgrepo-com.svg",
        desc: "Fast frontend build tool.",
      },
    ],
  },

  {
    title: "Backend & Database",
    description:
      "Technologies used to build server-side logic and manage databases.",
    elements: [
      {
        id: 1,
        title: "Node.js",
        icon: "/icon/node-js-svgrepo-com.svg",
        desc: "JavaScript runtime for backend.",
      },
      {
        id: 2,
        title: "Express.js",
        icon: "/icon/express-svgrepo-com.svg",
        className: "bg-white rounded-xl p-1",
        desc: "Backend framework for Node.js.",
      },
      {
        id: 6,
        title: "Next.js",
        icon: "/icon/next-js-svgrepo-com.svg",
        className: "bg-white rounded-xl p-1",
        desc: "React framework for SSR & full-stack apps.",
      },
      {
        id: 3,
        title: "MongoDB",
        icon: "/icon/mongodb-svgrepo-com.svg",
        desc: "NoSQL database.",
      },
      {
        id: 4,
        title: "MySQL",
        icon: "/icon/mysql-logo-svgrepo-com.svg",
        desc: "Relational database.",
      },
      {
        id: 5,
        title: "PostgreSQL",
        icon: "/icon/pgsql-svgrepo-com.svg",
        desc: "Advanced relational database.",
      },
      
    ],
  },

  {
    title: "Tools & Technologies",
    description:
      "Tools used for development, deployment, and workflow management.",
    elements: [
      {
        id: 1,
        title: "Git",
        icon: "/icon/git.svg",
        desc: "Version control system.",
      },
      {
        id: 2,
        title: "GitHub",
        icon: "/icon/github2.svg",
        desc: "Code hosting platform.",
      },
      {
        id: 3,
        title: "VS Code",
        icon: "/icon/vs-code-svgrepo-com.svg",
        desc: "Popular code editor.",
      },
      {
        id: 4,
        title: "Postman",
        icon: "/icon/postman-icon-svgrepo-com.svg",
        desc: "API testing tool.",
      },
      {
        id: 5,
        title: "Docker",
        icon: "/icon/docker-svgrepo-com.svg",
        desc: "Containerization platform.",
      },
      {
        id: 8,
        title: "Ubuntu",
        icon: "/icon/ubuntu-svgrepo-com.svg",
        desc: "Popular Linux distribution.",
      },
    ],
  },

  {
    title: "Programming Languages",
    description:
      "Languages used to build software, applications, and systems.",
    elements: [
      {
        id: 1,
        title: "JavaScript",
        icon: "/icon/js-official-svgrepo-com.svg",
        desc: "Web development language.",
      },
      {
        id: 2,
        title: "TypeScript",
        icon: "/icon/typescript-logo-svgrepo-com.svg",
        desc: "Typed JavaScript.",
      },
      {
        id: 3,
        title: "Java",
        icon: "/icon/java-logo-svgrepo-com.svg",
        desc: "Object-oriented programming language.",
      },
      {
        id: 4,
        title: "Python",
        icon: "/icon/python-svgrepo-com.svg",
        desc: "Easy and powerful language.",
      },
      {
        id: 5,
        title: "C++",
        icon: "/icon/cpp.svg",
        desc: "High-performance programming language.",
      },
    ],
  },
];

    
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === 3 ? 0 : prev + 1));
    }, 13000);

    return () => clearInterval(interval);
  }, []);


    return(
        <div className="mt-20 mb-20">
            <h1 className="text-4xl text-white mb-5 flex justify-center items-center gap-5 ">SKills <LuBrainCircuit/></h1>
            <div className="w-full h-130  grid grid-cols-8 gird-row-1 gap-5 ">   
                <GlassDiv className="row-span-1 col-span-1 overflow-hidden rounded-3xl">
                    <motion.div 
                    initial={{y: -1800}}
                    animate={{y: 0}}
                    transition={{duration:9 ,ease: "linear", repeatType: "reverse" , repeat: Infinity}}
                    className="flex flex-col justify-center items-center gpa-6 w-full">
                        {icons.map((img)=><Img {...img}/>)}
                    </motion.div>
                </GlassDiv>
                <div className="row-span-1 col-span-7 grid grid-cols-8 grid-rows-8 gap-5 ">
                  <div className="row-span-8 col-span-8 overflow-hidden rounded-3xl">
                      <SkillsTimeline key={index} component={datas[index]}/>
                  </div>
                    
                </div>
            </div>
        </div>
    )
}


function Img(props){
     
    return(
        <img src={props.src} alt={props.alt} className={"h-16 my-3 object-contain "+ props.className} />
    )
}




