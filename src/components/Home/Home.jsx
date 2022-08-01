import "./Home.css";
import NavbarTop from "./Navbar/Navbar";
import Starter from "./starter/Starter";
import LocationSwiper from './LocationSwiper/LocSwiper';
import Work from "./Works/Work";
import RegisterForm from "./RegisterForm/RegisterForm";
import Offers from "./Offers/Offers";
import Deals from "./Deals/Deals";

function Home() {
  return (
    <div id="home">
      <NavbarTop />
      <Starter />
      <LocationSwiper />
      <Work/>
      <RegisterForm />
      <Offers/>
      <Deals />
    </div>
  );
}

export default Home;


