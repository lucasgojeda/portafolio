import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Principales } from "./tecnologias/principales/Principales";
import { Secundarias } from "./tecnologias/secundarias/Secundarias";

import DoneAllIcon from '@mui/icons-material/DoneAll';
import DiamondIcon from '@mui/icons-material/Diamond';
import LabelImportantIcon from '@mui/icons-material/LabelImportant'; //This is a good one
import DoneIcon from '@mui/icons-material/Done'; //Not soo bad
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


import './About.scss';
import { Footer } from "../components/footer/Footer";
import { Typography } from "@mui/material";


export const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    return (
        <div className="aboutContainer">

            <div data-aos="fade-in" className="titleContainerPrimarias">
                <h3>
                    Me enfoco
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right" className='subrayado'></div>
                </h3>
            </div>

            {/* <div className="ResumenContainer"> */}

            {/* <ul> */}
            {/* <li data-aos="fade-right"> <span><DoubleArrowIcon />Llevo más de <span className="textColorized"> un año </span> aprendiendo y practicando desarrollo web en forma autodidacta.</span></li> */}
            {/* <li data-aos="fade-right"> <span><DoubleArrowIcon />He realizado un proyecto <span className="textColorized">mern</span> de relativa complejidad para intentar destacarme.</span></li> */}
            {/* <li data-aos="fade-right"> <span><DoubleArrowIcon />Actualmente estoy interesado en desempeñarme como frontend en calidad de <span className="textColorized">Trainee React Developer</span>.</span></li> */}
            {/* <li></li> */}
            {/* </ul> */}

            {/* </div> */}

            <Principales />

            <Secundarias />

            <div data-aos="fade-right" className="ResumenContainer2">

                <ul>
                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos="fade-right"><span><DoubleArrowIcon />Tengo un nivel de <span className="textColorized">inglés</span> bueno en lo relacionado a leer textos.</span></li>
                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos="fade-right"><span><DoubleArrowIcon />Estoy interesado en seguir haciendo cursos enfocados a <span className="textColorized">mejorar como frontend developer</span>.</span></li>
                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos="fade-right"><span><DoubleArrowIcon />Siento que encontré en la programación <span className="textColorized">una gran pasión</span>.</span></li>
                </ul>

            </div>

            {/* <Footer /> */}
        </div>
    )
}
