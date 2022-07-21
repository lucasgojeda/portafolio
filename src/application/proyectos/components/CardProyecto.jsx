import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import DiamondIcon from '@mui/icons-material/Diamond';
import LabelImportantIcon from '@mui/icons-material/LabelImportant'; //This is a good one
import DoneIcon from '@mui/icons-material/Done'; //Not soo bad
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import './CardProyecto.scss';


export const CardProyecto = ({ img, tecnologias, github, demo }) => {


    return (
        <div className="containerCardProyecto">

            <div className="imageContainer">
                <img src={img} />
            </div>

            <div className="secondContainer">

                <div className="descripcion">

                    <ul>
                        <li> <span><DoneIcon /><span className="textColorized"> Buscador de heroes </span>consumidos desde una API pública.</span></li>
                        <li> <span><DoneIcon /> Incluye pruebas unitarias.</span></li>
                        <li> <span><DoneIcon /> Proyecto realizado en el curso de fernando herrera.</span></li>
                        <li> <span><DoneIcon /> Para más detalles ir al repositorio de github.</span></li>
                        {/* <li>asdasdfasd</li> */}
                        {/* <li>asdasdfasd</li> */}
                        {/* <li>asdasdfasd</li> */}
                    </ul>

                </div>

                <div className="tecnologias">


                    {(tecnologias?.html) && <button>Html</button>}
                    {(tecnologias?.css) && <button>Css</button>}
                    {(tecnologias?.javascript) && <button>Javascript</button>}
                    {(tecnologias?.react) && <button>React</button>}

                </div>

                <div className="github-demo">

                    {
                        (github)
                        &&
                        // <a href={github}>
                            <button className="custom-btn btn-3"><span><GitHubIcon /> Github</span></button>
                        // </a>
                    }

                    {
                        (demo)
                        &&
                        // <a href={demo}>
                            <button className="custom-btn btn-3"><span><TerminalIcon /> Demo</span></button>
                        // </a>
                    }

                </div>


            </div>

        </div>
    )
}
