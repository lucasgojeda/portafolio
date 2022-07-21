import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
} from "react-router-dom";

import { Navbar } from '../application/components/Navbar';
import { Inicio } from '../application/inicio/Inicio';
import { Proyectos } from '../application/proyectos/Proyectos';
import { About } from '../application/about/About';
import { HomeScreen } from "../application/HomeScreen";
import { Footer } from "../application/components/Footer";


export const AppRouter = () => {


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