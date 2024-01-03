import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

import { wrap } from "@motionone/utils";

const childStyle = {
    fontFamily: 'Cinzel Decorative',
    fontSize: 36,
}

const childStyle2 = {
    fontFamily: 'Montserrat',
    fontSize: 28

}

const childStyle3 = {
    fontFamily: 'La Belle Aurore',
    fontSize: 32
}

interface ParallaxProps {
    children: string;
    baseVelocity: number;
    variant: number;
  }
  
function ParallaxText({ children, baseVelocity = 100, variant }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    
    const x = useTransform(baseX, (v) => `${wrap(35, -45, v)}%`);
  
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */

    if(variant==1){
        return (
            <div className="parallax">
                <motion.div className="scroller" style={{ x }}>
                    <span style={childStyle}>{children} </span>
                </motion.div>
            </div>
        );
    } else if(variant==2){
        return (
            <div className="parallax">
                <motion.div className="scroller" style={{ x }}>
                    <span style={childStyle2}>{children} </span>
                </motion.div>
            </div>
        );
    } else if(variant==3){
        return(
            <div className="parallax">
                <motion.div className="scroller" style={{ x }}>
                    <span style={childStyle3}>{children} </span>
                </motion.div>
            </div>
        )
    }

  }

  export default ParallaxText;
  