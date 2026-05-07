import { LuProjector } from "react-icons/lu";
import { motion } from "framer-motion";
import { useEffect, useRef ,useState} from "react";

export default function ProjectsCard() {



 
  const projects = [
    {
      id: 1,
      title: "Full Stack Auth App",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      desc: "Login & Register system using JWT authentication with secure backend.",
      tech: ["React", "Node", "MongoDB", "JWT"],
      github: "https://github.com/yourname/auth-app",
      live: "https://auth-app.vercel.app",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc: "Admin panel with analytics, charts, and user management system.",
      tech: ["Next.js", "Tailwind", "MongoDB"],
      github: "https://github.com/yourname/dashboard",
      live: "https://dashboard.vercel.app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Modern animated portfolio with Framer Motion and glass UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourname/portfolio",
      live: "https://portfolio.vercel.app",
    },
    {
      id: 4,
      title: "E-commerce App",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "Full stack e-commerce platform with cart and payment integration.",
      tech: ["React", "Node", "Stripe"],
      github: "https://github.com/yourname/ecommerce",
      live: "https://ecommerce.vercel.app",
    },
     {
      id: 4,
      title: "E-commerce App",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "Full stack e-commerce platform with cart and payment integration.",
      tech: ["React", "Node", "Stripe"],
      github: "https://github.com/yourname/ecommerce",
      live: "https://ecommerce.vercel.app",
    },   {
      id: 1,
      title: "Full Stack Auth App",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      desc: "Login & Register system using JWT authentication with secure backend.",
      tech: ["React", "Node", "MongoDB", "JWT"],
      github: "https://github.com/yourname/auth-app",
      live: "https://auth-app.vercel.app",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc: "Admin panel with analytics, charts, and user management system.",
      tech: ["Next.js", "Tailwind", "MongoDB"],
      github: "https://github.com/yourname/dashboard",
      live: "https://dashboard.vercel.app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Modern animated portfolio with Framer Motion and glass UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourname/portfolio",
      live: "https://portfolio.vercel.app",
    },
    {
      id: 4,
      title: "E-commerce App",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "Full stack e-commerce platform with cart and payment integration.",
      tech: ["React", "Node", "Stripe"],
      github: "https://github.com/yourname/ecommerce",
      live: "https://ecommerce.vercel.app",
    },
     {
      id: 4,
      title: "E-commerce App",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      desc: "Full stack e-commerce platform with cart and payment integration.",
      tech: ["React", "Node", "Stripe"],
      github: "https://github.com/yourname/ecommerce",
      live: "https://ecommerce.vercel.app",
    }

    
  ];

  return (
    <div className="py-20 text-white w-full">
        
      {/* Title */}
      <h1 className="text-4xl flex justify-center items-center gap-3 mb-12 ">
        <span className="text-4xl text-white">Projects</span>
        <LuProjector />
      </h1>
    <div className=" w-full overflow-hidden">
      {/* Scroll Container */}
      <motion.div
      initial={{x: -950}}
                    animate={{x: 700}}
                    transition={{duration:9 ,ease: "linear", repeatType: "reverse" , repeat:  Infinity,}}
                     
      className="flex  justify-center items-center  gap-8  py-5">
        {projects.map((project) => (
          <motion.div
            key={project.id}
           
            transition={{ type: "spring", stiffness: 200 }}
            className=" snap-center min-w-[300px] max-w-[300px] flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg hover:shadow-cyan-500/30 relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 neon">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 mb-3">
                {project.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border border-cyan-400 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-1 text-sm border border-white rounded-lg hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-3 py-1 text-sm bg-cyan-400 text-black rounded-lg cursor-pointer hover:shadow-cyan-400/50 hover:shadow-lg transition"
                >
                  Live
                </a>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      </div>
    </div>
  );
}