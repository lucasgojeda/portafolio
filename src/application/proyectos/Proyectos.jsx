

import { CardProyecto } from './components/CardProyecto';
import { Footer } from '../components/Footer';

import appImage from './images/app.png';
import './Proyectos.scss';
import { Typography } from '@mui/material';


export const Proyectos = () => {
    return (
        <div
            id='proyectos'
            className="proyectosContainer"
        >

            <div className="titleContainerProyectos">
                <Typography variant='p'>
                    Proyectos
                </Typography>
            </div>

            <CardProyecto
                img={appImage}
                tecnologias={({ html: true, css: true, react: true, javascript: true })}
                github="https://www.google.com/"
                demo="https://www.facebook.com/"
            />

            <CardProyecto
                img={appImage}
                tecnologias={({ html: true, css: true, react: true, javascript: true })}
                github="https://www.google.com/"
                demo="https://www.facebook.com/"
            />

            <CardProyecto
                img={appImage}
                tecnologias={({ html: true, css: true, react: true, javascript: true })}
                github="https://www.google.com/"
                demo="https://www.facebook.com/"
            />

            <CardProyecto
                img={appImage}
                tecnologias={({ html: true, css: true, react: true, javascript: true })}
                github="https://www.google.com/"
                demo="https://www.facebook.com/"
            />


            <Footer />

        </div>
    )
}
