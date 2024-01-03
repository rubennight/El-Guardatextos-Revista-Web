import React from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";  

interface Entradas{
    id: number;
    imagen: string,
    titulo: string; 
    autor: string;
    fecha: string;
    texto: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Entrada({ id, imagen, titulo, autor, fecha } : Entradas){
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const width = window.innerWidth;
    const height = window.innerHeight;

    return(
        <section>
            <div ref={ref}>
                <img src={imagen} style={{ width: width * 0.2 }} />                
            </div>
            <motion.h2 style={{ y }}>{titulo}</motion.h2>
        </section>
    );
}

export default Entrada;