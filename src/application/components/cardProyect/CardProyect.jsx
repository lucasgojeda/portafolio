import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

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


    return (
        <div
            className="containerCardProyecto"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">

            <div className="firstContainer">
                <CardImage img={img} />
            </div>


            <div className="secondContainer">

                <div className='title'>
                    <h3>{title}</h3>
                </div>

                <Description description={description} />

                <Tecnologias tecnologias={tecnologias} />

                <GithubAndDemoButtons github={github} demo={demo} />


            </div>

        </div>
    )
}
