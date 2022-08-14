// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
// import ErrorBoundary from './ErrorHandling';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import ALogin from './components/Admin/Login/ALogin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import LHome from './components/LHome/LHone';
import MyAccount from './components/LHome/MyAccount/MyAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/login"  element={<Login/>} />
        <Route path='/admin'  element={<ALogin />} /> 
        <Route path='/dashboard'  element={<Dashboard />} /> 
        <Route path='/~' element={<LHome />} />
        <Route path='/myaccount' element={<MyAccount />} />
      </Routes>
    </div>
  )
}

export default App;
