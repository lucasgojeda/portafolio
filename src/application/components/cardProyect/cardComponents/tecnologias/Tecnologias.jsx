import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Tecnologias.scss';


export const Tecnologias = ({ tecnologias }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    return (
        <div className="tecnologias">

            {
                (tecnologias?.html) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="25"
                    data-aos-duration="500"
                    data-aos-offset="0"
                >Html</button>
            }

            {
                (tecnologias?.css) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="25"
                    data-aos-duration="500"
                    data-aos-offset="0"
                >Css</button>
            }

            {
                (tecnologias?.javascript) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="25"
                    data-aos-duration="500"
                    data-aos-offset="0"
                >Javascript</button>
            }

            {
                (tecnologias?.react) && <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="25"
                    data-aos-duration="500"
                    data-aos-offset="0"
                >React</button>
            }

        </div>
    )
}
