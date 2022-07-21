import { Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Type } from "./Type"
import { Footer } from "../components/Footer";

import './Inicio.css';


export const Inicio = () => {


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
                    <div className="containerTitleAndType">
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
                    <AccountCircleIcon className="pictureIcon" />
                </div>


                {
                    (sm || md)
                    &&
                    <div className="containerTitleAndType">
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



            {/* <Footer position='absolute' /> */}

        </div>
    )
}
