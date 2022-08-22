import Footer from "../Home/Footer/Footer";


import DPlans from "./Plans/DPlans";
import GPlans from "./Plans/GPlans";
import GProPlans from "./Plans/GProPlans";
import LFooter from "./LFooter/LFooter";
import NavbarTop from "./LNavbar/Navbar";
import ControlBar from "./MobileControls/Controls";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LHome() {

    const navigate = useNavigate();

    useEffect( ()=>{
        if(window.sessionStorage.getItem("token")===null) {
            return navigate('/login', {state:{msg: 'Session Expired'}});
        }
    })

    return(
        <section id="LHome">
            <NavbarTop />
            <DPlans />
            <GPlans />
            <GProPlans />
            <LFooter />
            <Footer/>
            <ControlBar />
        </section>
    )

}