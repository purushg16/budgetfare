import "./Home.css";
import NavbarTop from "./Navbar/Navbar";
import Starter from "./starter/Starter";
import LocationSwiper from "./LocationSwiper/LocSwiper";
import Work from "./Works/Work";
import RegisterForm from "./RegisterForm/RegisterForm";
import Offers from "./Offers/Offers";
import Deals from "./Deals/Deals";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import Greeting from "./Greetings/Greeting";
import QA from "./QA/QA";

function Home() {
  const [ports, fetchPorts] = useState([]);
  const [loaded, isloaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const getData = async () => {
    fetch("https://budgetfare.herokuapp.com/admin/viewAirport")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchPorts(res);
        window.sessionStorage.setItem("airports", JSON.stringify(res));
      });
  };

  useEffect(() => {
    if (progress < 101) setProgress( progress + 1)
    if (ports.length !== 0) {
      if (progress === 100) isloaded(true)
    }
    getData();
  }, [ports, progress]);

  return (

    <>
    {ports.length !== 0 ? (
      <div id="home">
        <div className="landing">
          <NavbarTop />
          <Starter />
        </div>
        <LocationSwiper />
        <Work />
        <RegisterForm />
        <Offers />
        <Deals />
        <Greeting />
        <QA />
        <Footer />
      </div>
    ) : ( 

    <div style={{ 
      position: 'fixed',
      width: '50%',
      top: '40%',
      left: '35%',
      transform: 'translate(-20%, -20%)',
      }}>
      <p style={{ animation: 'bounce',animationDuration: '2s', fontWeight:'bold'}} > Loading </p>
      <MDBProgress>
        <MDBProgressBar width={progress} valuemin={0} valuemax={100} bgColor='success' />
      </MDBProgress>
    </div>
   )} 
    </> 
  );
}

export default Home;
