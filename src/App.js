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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/login"  element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
