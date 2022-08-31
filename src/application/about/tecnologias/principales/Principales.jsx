import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Box, Typography } from "@mui/material"
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './Principales.scss';


export const Principales = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
        AOS.refresh();
    }, []);

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));

    const html = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/html_c9ua6i.png';
    const css = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181418/Portafolio/css_bwvlmz.png';
    const javascript = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/javascript_mg7xmn.png';
    const react = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181418/Portafolio/react_k9io6q.png';
    const git = 'https://res.cloudinary.com/the-kings-company/image/upload/v1661902777/Portafolio/Github_fhf1rs.png';

    return (
        <div className="principalesContainer">

            <div className="imagesContainerPrimarias">

                <Tooltip
                    data-aos={ (sm) ? "fade-left" : "fade-right" }
                    title="React Js"
                    arrow>
                    <img className="raise" src={react} />
                </Tooltip>

                <Tooltip
                    data-aos={ (sm) ? "fade-right" : "fade-down-right" }
                    title="Javascript"
                    arrow>
                    <img className="raise" src={javascript} />
                </Tooltip>

                <Tooltip
                    data-aos={ (sm) ? "fade-left" : "fade-down" }
                    title="CSS"
                    arrow>
                    <img className="raise" src={css} />
                </Tooltip>

                <Tooltip
                    data-aos={ (sm) ? "fade-right" : "fade-down-right" }
                    title="HTML"
                    arrow>
                    <img className="raise" src={html} />
                </Tooltip>

                <Tooltip
                    data-aos={ (sm) ? "fade-left" : "fade-left" }
                    title="GitHub"
                    arrow>
                    <img className="raise" src={git} />
                </Tooltip>


            </div>

        </div>
    )
}
