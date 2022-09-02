import React, { useState } from 'react'

import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import './CardImage.scss';


export const CardImage = ({ img }) => {

    const [counterImage, setCounterImage] = useState(0);

    return (
        <img className='image' src={img[0]} alt='' />
    )
}
