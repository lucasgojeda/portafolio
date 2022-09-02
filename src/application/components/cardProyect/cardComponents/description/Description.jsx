import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import DoneIcon from '@mui/icons-material/Done';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EastIcon from '@mui/icons-material/East';

import './Description.scss';


export const Description = ({ description }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    return (
        <div className="descripcion">

            <ul>
                {
                    description.items.map((e, i) =>
                        <li key={i}>
                            <span>
                                <span
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="25"
                                    data-aos-duration="500"
                                    data-aos-offset="0"
                                >
                                    <KeyboardArrowRightIcon />
                                </span>
                                {e}
                            </span>
                        </li>
                    )
                }
            </ul>

        </div>
    )
}
