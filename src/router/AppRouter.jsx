import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
} from "react-router-dom";

import { Navbar } from '../application/components/navbar/Navbar';
import { Inicio } from '../application/inicio/Inicio';
import { Proyectos } from '../application/proyectos/Proyectos';
import { About } from '../application/about/About';
import { HomeScreen } from "../application/HomeScreen";
import { Footer } from "../application/components/footer/Footer";
import { useState } from "react";

import '../App.css';
import { LoadingPage } from "../application/loading/LoadingPage";

export const AppRouter = () => {

    const [counter, setCounter] = useState(true)

    setTimeout(() => {

        setCounter(false);
    }, 500);

    if(counter) return <LoadingPage />
    
    return (

        <BrowserRouter>

                {/* <Navbar /> */}

            <Routes>


                <Route path="/" element={<HomeScreen />} />
                {/* <Route path="/" element={<Inicio />} /> */}

                <Route path="/about" element={<About />} />

                <Route path="/proyectos" element={<Proyectos />} />

                <Route path="/*" element={<Navigate to="/" />} />


            </Routes>

            {/* <Footer /> */}

        </BrowserRouter>
    );
};