import { useEffect } from "react";
import { Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AOS from 'aos';
import 'aos/dist/aos.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Type } from "./Type"
import { Footer } from "../components/footer/Footer";

import './Inicio.scss';
import { ArrowDown } from "../components/arrowDown/ArrowDown";

const image = 'https://res.cloudinary.com/the-kings-company/image/upload/v1661787469/Portafolio/IMG_20220828_120501_331_sehi6d.webp';


export const Inicio = ({ scrollToElement }) => {

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


    // console.log('sm', sm)
    // console.log('md', md)
    // console.log('xl', xl)
    // console.log('lg', lg)

    return (
        <div className="container">

            <div className="containerTitleAndPicture">


                {
                    (!sm && !md)
                    &&
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos="zoom-in-down" className="containerTitleAndType">
                        <div className="containerTitle">
                            <Typography variant='p'>
                                Ojeda Lucas Gabriel
                            </Typography>
                        </div>

                        <div className="containerType">
                            <Type />
                        </div>
                    </div>
                }


                <div className="containerPicture">

                    <img
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos="zoom-in"
                        src={image} />

                    <div
                        data-aos-offset="0"
                        data-aos-delay="500"
                        data-aos-duration="500"
                        data-aos="fade-right"
                        data-aos-easing="ease-in-back"
                        className='iconLinkedinContainer'>
                        <LinkedInIcon />
                    </div>

                </div>


                {
                    (sm || md)
                    &&
                    <div
                        data-aos-offset="0"
                        data-aos-duration="500"
                        data-aos="zoom-in-down" className="containerTitleAndType">
                        <div className="containerTitle">
                            <Typography variant='p'>
                                Ojeda Lucas Gabriel
                            </Typography>
                        </div>

                        <div className="containerType">
                            <Type />
                        </div>
                    </div>
                }


            </div>

            <div>
                <ArrowDown />
            </div>

            <div
                onClick={scrollToElement}
                className="arrowDownContainer">

            </div>



            {/* <Footer position='absolute' /> */}

        </div>
    )
}
