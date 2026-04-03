
import { BiDownArrow } from 'react-icons/bi';
import AboutCard from './components/aboutCard';
import Navbar from './components/nav';
import FloatingLines from './utils/FloatingLines';
/* import FloatingLines from './utils/FloatingLines'; */
import { motion } from 'framer-motion';

function App() {
  return (
  
<div>
<div className="w-screen h-screen relative">
<FloatingLines 
    enabledWaves={["top","middle","bottom"]}
    // Array - specify line count per wave; Number - same count for all waves
    lineCount={5}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={5}
    bendRadius={5}
    bendStrength={-0.5}
    interactive={true}
    parallax={true}
  />

</div>

  <div className="absolute z-10 top-0 left-0 h-screen w-screen scroll-smooth px-5  overflow-auto">
    <Navbar />
    <AboutCard/>
    <div className='w-full flex justify-center '>
      <div className='h-10 w-5 border-2 border-white rounded-4xl text-white overflow-hidden'> 
         <motion.div 
            initial={{ y: -20}}
           animate={{y: 40}}
            transition={{ duration: 1, ease: "linear" ,repeat: Infinity}}>
              <BiDownArrow/>
              </motion.div> 
               <motion.div 
            initial={{ y: -20}}
           animate={{y: 40}}
            transition={{ duration: 1, ease: "linear" ,repeat: Infinity}}>
              <BiDownArrow/>
              </motion.div> 
              
      </div>
    </div> 
  
  </div>

</div>
  );
}

    
export default App;