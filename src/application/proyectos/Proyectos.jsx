import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { CardProyect } from '../components/cardProyect/CardProyect';
import { Footer } from '../components/footer/Footer';

import appImage from './images/app.png';
import './Proyectos.scss';
import { Typography } from '@mui/material';

import { data } from './data.js';


export const Proyectos = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    console.log(data)


    return (
        <div
            id='proyectos'
            className="proyectosContainer"
        >

            <div
                data-aos="fade-in"
                className="titleContainerProyectos">
                <Typography variant='p'>
                    Proyectos
                </Typography>
            </div>


            {
                data.map((e, i) =>
                    <CardProyect
                        key={i}
                        title={e.title}
                        img={e.img}
                        description={e.description}
                        tecnologias={e.tecnologias}
                        github={e.github}
                        demo={e.demo}
                    />)
            }

            <Footer />

        </div>
    )
}
