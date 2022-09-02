import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { CardImage } from './cardComponents/image/CardImage';
import { Tecnologias } from "./cardComponents/tecnologias/Tecnologias";
import { GithubAndDemoButtons } from "./cardComponents/github-demo/GithubAndDemoButtons";

import './CardProyect.scss';
import { Description } from "./cardComponents/description/Description";


export const CardProyect = ({ img, title, description, tecnologias, github, demo }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <div
            className="containerCardProyecto"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="500">

            <div className="firstContainer">
                {
                    (sm || md)
                    &&
                    <div className='title'>
                        <h3>
                            {title}
                            <div
                                className='subrayado'
                                data-aos="fade-right"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="500"
                                data-aos-duration="500"
                                data-aos-offset="0"
                            ></div>
                        </h3>
                    </div>
                }
                <CardImage img={img} />
            </div>


            <div className="secondContainer">

                {
                    (!sm && !md)
                    &&
                    <div className='title'>
                        <h3>
                            {title}
                            <div
                                className='subrayado'
                                data-aos="fade-right"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="500"
                                data-aos-duration="500"
                                data-aos-offset="0"
                            ></div>
                        </h3>
                    </div>
                }

                <Description description={description} />

                <Tecnologias tecnologias={tecnologias} />

                <GithubAndDemoButtons github={github} demo={demo} />


            </div>

        </div>
    )
}
