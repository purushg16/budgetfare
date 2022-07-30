// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ErrorBoundary from './ErrorHandling';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
