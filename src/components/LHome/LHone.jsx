import Footer from "../Home/Footer/Footer";


import DPlans from "./Plans/DPlans";
import GPlans from "./Plans/GPlans";
import GProPlans from "./Plans/GProPlans";
import LFooter from "./LFooter/LFooter";
import NavbarTop from "./LNavbar/Navbar";
import ControlBar from "./MobileControls/Controls";


export default function LHome() {

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