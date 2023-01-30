import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface IProps {
    children: React.ReactNode;
}

export default function Animated({ children }: IProps) {
    const control = useAnimation()
    const [ref, inView] = useInView()
  
    const exampleVariant = {
      visible: { x: 0, opacity: 1, scale: 1, transition: {
        duration: 0.8
      } },
      hidden: { opacity: 0, scale: 1, x: 200 },
    }
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
      else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div ref={ref} variants={exampleVariant} initial="hidden" animate={control} className="box">
            { children }
        </motion.div>
    )
}