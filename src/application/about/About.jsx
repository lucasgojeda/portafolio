
import { Principales } from "./tecnologias/principales/Principales";
import { Secundarias } from "./tecnologias/secundarias/Secundarias";

import DoneAllIcon from '@mui/icons-material/DoneAll';
import DiamondIcon from '@mui/icons-material/Diamond';
import LabelImportantIcon from '@mui/icons-material/LabelImportant'; //This is a good one
import DoneIcon from '@mui/icons-material/Done'; //Not soo bad
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


import './About.scss';
import { Footer } from "../components/Footer";


export const About = () => {
    return (
        <div className="aboutContainer">

            <div className="ResumenContainer">

                <ul>
                    <li> <span><DoubleArrowIcon />Llevo más de <span className="textColorized"> un año </span> aprendiendo y practicando desarrollo web en forma autodidacta.</span></li>
                    <li> <span><DoubleArrowIcon />He realizado un proyecto <span className="textColorized">mern</span> de relativa complejidad para intentar destacarme.</span></li>
                    <li> <span><DoubleArrowIcon />Actualmente estoy interesado en desempeñarme como frontend en calidad de <span className="textColorized">Trainee React Developer</span>.</span></li>
                    {/* <li></li> */}
                </ul>

            </div>

            <Principales />

            <Secundarias /> 

            <div className="ResumenContainer2">

                <ul>
                    <li><span><DoubleArrowIcon />Tengo un nivel de <span className="textColorized">inglés</span> bueno en lo relacionado a leer textos.</span></li>
                    <li><span><DoubleArrowIcon />Estoy interesado en seguir haciendo cursos enfocados a <span className="textColorized">mejorar como frontend developer</span>.</span></li>
                    <li><span><DoubleArrowIcon />Siento que encontré en la programación <span className="textColorized">una gran pasión</span>.</span></li>
                </ul>

            </div>

            {/* <Footer /> */}
        </div>
    )
}
