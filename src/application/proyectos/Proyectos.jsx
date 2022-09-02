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
                className="titleContainerProyectos"
            >
                <h1
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos="fade-in" className="title">
                    Proyectos
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right" className='subrayado'></div>
                </h1>
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
