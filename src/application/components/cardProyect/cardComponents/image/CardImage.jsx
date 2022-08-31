import React, { useState } from 'react'

import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import './CardImage.scss';


export const CardImage = ({ img }) => {

    const [counterImage, setCounterImage] = useState(0);

    return (
        <Container className='containerImage'>



            {
                (img.length !== 0)
                &&
                <>
                    {img.map((image, i) => (
                        <Container
                            className="imageCard"
                            key={i}
                            sx={{
                                visibility: (i === counterImage) ? 'visible' : 'hidden',
                                position: 'absolute'
                            }}
                        >

                            <Container className='arrowsContainer'>

                                <IconButton
                                    sx={{
                                        visibility: (img.length === 0 || img.length === 1) ? 'hidden' : 'visible'
                                    }}
                                    className='leftArrowIcon arrowButtons'
                                    disabled={(counterImage === 0)}
                                    color="primary"
                                    component="span"
                                    onClick={() => setCounterImage(counterImage - 1)}
                                >
                                    <ArrowLeftIcon />
                                </IconButton>

                                <IconButton
                                    sx={{
                                        visibility: (img.length === 0 || img.length === 1) ? 'hidden' : 'visible'
                                    }}
                                    className='rightArrowIcon arrowButtons'
                                    disabled={( counterImage >= (img.length - 1))}
                                    color="primary"
                                    component="span"
                                    onClick={() => {
                                        setCounterImage(counterImage + 1);
                                        console.log('click')
                                    }}
                                >
                                    <ArrowRightIcon />
                                </IconButton>

                            </Container>

                            <img
                                src={image}
                                alt=""
                            />



                        </Container>
                    ))}
                </>
            }

        </Container>
    )
}
