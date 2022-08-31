import React from 'react'

import { Cohete } from '../components/cohete/Cohete'
import { ParticlesBackground } from '../components/particlesBackground/ParticlesBackground'
import { SpinnerLoading } from '../components/spinnerLoading/spinnerLoading'

import './LoadingPage.scss'; 


export const LoadingPage = () => {
    return (
        <div className='loadingPageContainer'>
            <SpinnerLoading />
            <Cohete />
            <ParticlesBackground />
        </div>
    )
}
