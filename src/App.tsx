import React from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import './App.css'

import TopAppBar from './components/TopAppBar'
import Entrada from './components/Entradas'
import { Divider } from '@mui/material'

const entrada = (id: number, imagen: string, titulo: string, autor: string, fecha: string, texto: string) => {
  return { id, imagen, titulo, autor, fecha, texto };
}

const entradas = [
  entrada(
    1,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjExkKLrgD57vAYkD9vbwTfpF75RngMnBlUAJoZ2cbXN8a7KpTFnrOAziIqfcXZDNy80gkVm5b1KNYxfoxLQGBkISxna9SEUawxYA3bQUkBsmgTyXuqC4YAtVW5NxTejI4eeNwlZZ7CJr2DrQ8MK2kbVK-Bkz1UgR-AV-G43b5xt9Mn7FNVsRL8PRdmnF5o/w326-h400-rw/jos___morea_1_crop.jpeg',
    'Godín',
    'José Baroja',
    'enero 02, 2024',
    ''
  ),
  entrada(
    2,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKNhyIiwMxstd21_AcYbYkSTfLicWM4QtqOl_2BTyr91wSFV3ERqSLPmAcecbJJ5W_LXjpNkd6fhGKk2fZc9tobw06U_YwCyceAk5udWsKSqXmrz5N9fBx2gzOkjlStVPio4f_kubKTFVzOfGg83j4Jv1vR6J5mbraWjV40JH8lx7yFx8izaR_1-MLU-iP/w400-h366-rw/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvOTRjODBkNmJkNzlkZGFhNzM3Nzc5ODFhMThlNDUwYzkuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.Jshm80NtLgDM6cEE3Kr38usJ2YAaquCxPNyUZn75hbQ.jpg',
    'Tres cuentos infantiles de ',
    'Ma. Zulema Moreno Lopez',
    'diciembre 28, 2023',
    ''
  ),
  entrada(
    3,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFfjNmbKjgqxVDoB_tuCnN8uuTKDfXYgjA5JeoN01c2ZIQRvdypyRHlYVdCNS4yAvH3-EmLJ-Rv20nHk0zIfEzv1H79F8Zx446nRlhSTVEtcKuv59T0oU8H7zvSC8A1b8jU9DwkBl8yubutWzpcCIGeekzXjVryCL-7CYBWj6FpORmj4MOBRQGvRQ4vZiy/w576/6057cb329fc9949757be042a74b55d44.jpeg',
    'Exodoncia. Seis poemas de ',
    'Alexia Castañeda',  
    'diciembre 10, 2023',
    ''
  ),
  entrada(
    4,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIaW6a8jRd8J_hvuMDC3BGyKacJLpePryIx02BzqbXu3m0cBr3wsT5HTfN8WonoYRVf4Mob5xME2GMn_fz-2LNQ0sC1_ZC41WQ4E0JY_Lcx9y8JklqvlLHeF_Wga1n3xqxSloA7XWcrcojIkI7SsqRAp7yOhpqLEKoEu6Kgx2VNQ5zooT_7_9f2YkiXdql/w576/Imagen%201.png',
    'Poemas de "falso jazz" de ',
    'Fernando Waroto',  
    'noviembre 24, 2023',
    ''
  ),
  entrada(
    5,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO78hF2kpRHRKOQ23sgfrtAltqOGmWtdgfX0F7Gjho5zUSaYRWq944TfDWFTH2OLf2n9eDV39J_BsE6emO1RorBS1IOTsgQ1Ln4DQdo4e9fH-zoZtLmI9TjnfMQVVg9McjaaGJYj3t3sHvb4WnkvVvRtuwkwl0sDojP_JubxypOvu7XolrqWOcrs-hakI2/w576/975-9755686_collage-of-los-angeles-with-surf-board-and.png',
    'La mujer destructora: poemas de ',
    'Viva Padilla',  
    'noviembre 02, 2023',
    ''
  ),
  entrada(
    6,
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEa2Mn1rK0oewauILdH-8X69bDg48GlQlCxVdGbA-rFFxChtZXLz80KNhRuJwEP7S9I-dE-nMcw-snCtZ9KwClFQ82BNTo5ZpIZeiVBYCIyo22Lbm_WAqGLBau6EojBWQ5LqayYAq6CQ5fES3ndcjyRVJpr9wWQQQrgEcA3d_cEb6sUjE4BM-XuT6zBMQ0/w576/additional_b34f64692bfeec01dbe4aec0985f6926a8f1bc35-AICC2-7.jpeg',
    'Safo y Mnemosine. Seis poemas de ',
    'Adrián Chaurán',  
    'octubre 17, 2023',
    ''
  ),  
]

function App() {
  const width = window.innerWidth;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{width: width}}>
      <TopAppBar />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
        <div>
          {entradas.map((entrada) =>(
            <Entrada key={entrada.id} id={entrada.id} imagen={entrada.imagen} titulo={entrada.titulo} autor={entrada.autor} fecha={entrada.fecha} texto='' />
          ))}
          <motion.div className="progress" style={{ scaleX }} />
        </div>        
        <Divider orientation='vertical' flexItem />
        <div>
          Columna o algo
        </div>
      </div>

    </div>
  )
}

export default App
