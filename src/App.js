import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "animate.css/animate.min.css";
import './App.scss';
// import 'jquery-sticky'

import Preloader from './components/preloader';
import Home from './components/home';
import NavBar from './components/navBar';
import Sections from './components/sections';

import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <Preloader/>
      <Home/>
      <NavBar/>
      <Sections/>

   
    <Footer/>

    </div>
  );
}

export default App;
