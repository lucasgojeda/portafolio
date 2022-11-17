import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { Principales } from "./tecnologias/principales/Principales";
import { Secundarias } from "./tecnologias/secundarias/Secundarias";

import './About.scss';


export const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);


    return (
        <div className="aboutContainer">

            <div className="titleContainerPrimarias">

                <h3
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    data-aos="fade-in"
                >
                    Me enfoco en
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right"

                        className='subrayado'
                    ></div>
                </h3>

            </div>

            <Principales />

            <Secundarias />

            <div data-aos="fade-right" className="ResumenContainer2">

                <ul>

                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="700"
                        data-aos="fade-right"
                    >
                        <span><DoubleArrowIcon />Llevo más de <span className="textColorized"> un año </span> aprendiendo y practicando desarrollo web en forma autodidacta.</span>
                    </li>

                    <li
                        data-aos-offset="0"

                        data-aos-duration="500"
                        data-aos-delay="600"
                        data-aos="fade-right"
                    >
                        <span><DoubleArrowIcon />Estoy interesado en seguir haciendo cursos enfocados a mejorar como <span className="textColorized">frontend developer</span>.</span>
                    </li>

                    <li
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos="fade-right"
                    >
                        <span><DoubleArrowIcon />Tengo un nivel de <span className="textColorized">inglés</span> bueno en lo relacionado a leer documentación en dicho idioma.</span>
                    </li>

                </ul>

            </div>

        </div>
    )
}
