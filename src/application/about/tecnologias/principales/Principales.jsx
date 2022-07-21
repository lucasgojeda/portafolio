import { Box, Typography } from "@mui/material"

import Tooltip from '@mui/material/Tooltip';

import './Principales.scss';


export const Principales = () => {

    const html = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/html_c9ua6i.png';
    const css = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181418/Portafolio/css_bwvlmz.png';
    const javascript = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/javascript_mg7xmn.png';
    const react = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181418/Portafolio/react_k9io6q.png';
    const git = 'https://res.cloudinary.com/the-kings-company/image/upload/v1658181417/Portafolio/git_pwdfol.png';

    return (
        <div className="principalesContainer">

            <div className="titleContainerPrimarias">
                <Typography variant='p'>
                    Me enfoco en
                </Typography>
            </div>

            <div className="imagesContainerPrimarias">

                <Tooltip title="HTML" arrow>
                    <img className="raise" src={html} />
                </Tooltip>

                <Tooltip title="CSS" arrow>
                    <img className="raise" src={css} />
                </Tooltip>

                <Tooltip title="Javascript" arrow>
                    <img className="raise" src={javascript} />
                </Tooltip>

                <Tooltip title="React Js" arrow>
                    <img className="raise" src={react} />
                </Tooltip>

                <Tooltip title="GitHub" arrow>
                    <img className="raise" src={git} />
                </Tooltip>


            </div>

        </div>
    )
}
