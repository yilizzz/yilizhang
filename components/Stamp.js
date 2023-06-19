
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

  const images = [
    'img/shan.png',
    'img/gao.png',
    'img/shui.png',
    'img/chang.png'
  ];
 

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 1
      }
    }
  };
  
  const item = {
    hidden: { y:50,opacity: 0 },
    show: { y:0,opacity: 1 },
    exit: { opacity: 0 }
  };

  const positions = [
    { left: 0, top: 0 },
    { left: "70px", top: 0 },
    { left: 0, top: "70px" },
    { left: "70px", top: "70px" }
  ];
export default function Stamp() {
  const [showFinalImage, setShowFinalImage] = React.useState(false);

  return (
    <div>
      {!showFinalImage && (
         <div style={{ position: "relative", width: "150px", height:"150px", display: "inline-block" }}>
          
        <motion.div 
        key='stamp'
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
 
          onAnimationComplete={() => setShowFinalImage(true)}
        >
          {[0, 1, 2, 3].map(i => (
            <motion.img
              key={i}
              src={images[i]}
              variants={item}
              style={{ position: "absolute", width: "70px", height: "70px", ...positions[i] }}
            />
          ))}
        </motion.div></div>
      )}
      {showFinalImage && 
      <motion.img
          src="img/stamp2.webp"
          alt="Everyone connected to the network will meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: "150px", height: "150px" }}
        />
      }
      
    </div>
  );
};
