import "./Home.css";
import NavbarTop from "./Navbar/Navbar";
import Starter from "./starter/Starter";
import LocationSwiper from './LocationSwiper/LocSwiper';
import Work from "./Works/Work";
import RegisterForm from "./RegisterForm/RegisterForm";
import Offers from "./Offers/Offers";
import Deals from "./Deals/Deals";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";

function Home() {
  const [ports, fetchPorts] = useState([])
  const [loaded, isloaded] = useState(false)

  const getData = async () => {
    fetch('https://budgetfare.herokuapp.com/admin/viewAirport')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchPorts(res)
        window.sessionStorage.setItem('airports', JSON.stringify(res))
      })
  }

  useEffect(() => {
    if (ports.length !== 0) {
      isloaded(true);
    }
      getData()
  }, [ports])


  return (
    <div id="home">
      <NavbarTop />
      <Starter />
      <LocationSwiper />
      <Work/>
      <RegisterForm />
      <Offers/>
      <Deals />
      <Footer />
    </div>
  );
}

export default Home;


