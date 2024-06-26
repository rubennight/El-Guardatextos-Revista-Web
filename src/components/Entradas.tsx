import React from 'react'
import {
    motion,
    useScroll,
    useTransform,
    MotionValue
  } from "framer-motion";  
import { Link } from 'react-router-dom';

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

    return(
        <section>
            <Link to={'/entrada'}>
                <div ref={ref}>
                    <img src={imagen} style={{ width: width * 0.3, borderRadius: 20 }} />                
                </div>            
            </Link>
            <motion.h2 style={{ y, color: '#e8de10' }}>{titulo}</motion.h2>
            <motion.h3 style={{ y, color: '#e8de10'}}>{autor}</motion.h3>
            <motion.h4 style={{ y, color: '#e8de10'}}>{fecha}</motion.h4>
        </section>
    );
}

export default Entrada;