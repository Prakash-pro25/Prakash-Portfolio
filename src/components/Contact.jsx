




import GlassDiv from "../utils/GlassLook";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";



export default function Contact() {
  return (
    <div className="h-100 w-full flex gap-6 p-6  text-white">

      {/* LEFT SIDE */}
      <GlassDiv className="w-7/10 rounded-4xl flex items-center justify-center">
   
        
        <div className="text-center space-y-4 ">

          <RiContactsBook3Fill className="text-6xl text-white/80 mx-auto" />
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <p className="text-gray-300 ">
            Feel free to reach out for collaborations, projects or just a friendly hello 👋
          </p>
          
          <SocialLinks/>
        </div>
        <div className="w-30  bg-linear-to-r from-pink-500 to-violet-500 absolute -top-13 right-170 h-89">
               <div className="h-ful w-full   text-black flex flex-col gap-4 items-center text-center"> 
    <div className="flex flex-col"><span className=" font-extrabold text-2xl">4+</span> <span className="text-xl">domains </span></div><hr className="h-0.5 w-20   bg-blue-700 border-blue-600"/>
    <div className="flex flex-col"><span className=" font-extrabold text-2xl">25+</span> <span className="text-xl">Projects </span></div><hr className="h-0.5 w-20 bg-blue-700 border-blue-600"/>
    <div className="flex flex-col"><span className=" font-extrabold text-2xl">20+</span><span className="text-xl">Technologies</span></div><hr className="h-0.5 w-20 bg-blue-700 border-blue-600"/>
    <div className="flex flex-col"><span className=" font-extrabold text-2xl">5+</span><span className="text-xl">Languages</span></div>
</div>

        </div>
  
      </GlassDiv>

      {/* RIGHT SIDE */}
      <div className="w-3/10 relative">
        <GlassDiv className="w-full h-full rounded-4xl" />

        <form className="absolute top-0 w-full h-full flex flex-col justify-center items-center gap-3 p-6">

          {/* INPUT */}
          {["Your Name", "Your Email", "Subject"].map((item, i) => (
            <div key={i} className="relative w-72">
              <input
                type="text"
                placeholder=" "
                className="peer w-full h-11 rounded-full px-4 bg-white/10 backdrop-blur-md text-white outline-none border border-white/20 focus:border-blue-400"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm 
                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 
                peer-focus:bg-black px-1 rounded">
                {item}
              </label>
            </div>
          ))}

          {/* TEXTAREA */}
          <div className="relative w-72">
            <textarea
              placeholder=" "
              className="peer w-full min-h-28 max-h-28 rounded-2xl p-4 bg-white/10 text-white outline-none border border-white/20 focus:border-blue-400"
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 
              peer-focus:bg-black px-1 rounded">
              Message
            </label>
            
          </div>
          

        </form>
        <button className="h-15 w-15 rounded-full bottom-15 -right-95 ring-2 relative bg-linear-to-r from-pink-500 to-violet-500 text-4xl flex justify-center items-center hover:scale-115   duration-100">
           <BiLogoTelegram/>
        </button>

        
      </div>

    </div>
  );
}


export function SocialLinks() {

  const links = [
    {
      name: "LinkedIn",
      username: "prakash-p25",
      icon: <FaLinkedin className="text-2xl text-blue-400" />,
      url: "https://linkedin.com/in/prakash-p25",
      shadow: "hover:shadow-blue-500/20"
    },
    {
      name: "GitHub",
      username: "Prakash-pro25",
      icon: <FaSquareGithub className="text-2xl text-white" />,
      url: "https://github.com/Prakash-pro25",
      shadow: "hover:shadow-purple-500/20"
    },
    {
      name: "Email",
      username: "prakash25112006@gmail.com",
      icon: <SiGmail className="text-2xl text-red-400" />,
      url: "mailto:prakash25112006@gmail.com",
      shadow: "hover:shadow-red-500/20"
    }
  ];

  return (
    <div className="flex flex-wrap gap-5 w-full">

      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-4 p-4 rounded-2xl 
          bg-white/10 backdrop-blur-md border border-white/20
          hover:scale-105 hover:shadow-lg ${item.shadow}
          transition duration-300 group`}
        >
          <div className="group-hover:-translate-y-1 transition">
            {item.icon}
          </div>

          <div>
            <p className="text-sm text-gray-400">{item.name}</p>
            <p className="font-semibold">{item.username}</p>
          </div>
        </a>
      ))}

    </div>
  );
}
/* 
  <div className="h-85 w-full flex justify-center">
    
           <h1 className="text-4xl text-white  flex justify-center  gap-5 ">Contact us<RiContactsBook3Fill/></h1>
           
           </div>
<div className="h-15 w-full bg-black top-85 absolute text-white flex justify-around items-center"> 
    <div><span className=" font-extrabold text-2xl">4+</span> <span className="text-xl">domains know</span></div><hr className="h-12 w-0.5 bg-blue-700 border-blue-600"/>
    <div><span className=" font-extrabold text-2xl">25+</span> <span className="text-xl">Projects Completed</span></div><hr className="h-12 w-0.5 bg-blue-700 border-blue-600"/>
    <div><span className=" font-extrabold text-2xl">20+</span><span className="text-xl">technologies master</span></div><hr className="h-12 w-0.5 bg-blue-700 border-blue-600"/>
    <div><span className=" font-extrabold text-2xl">5+</span><span className="text-xl">programming languages</span></div>
</div> */
