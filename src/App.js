import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "animate.css/animate.min.css";
import './App.scss';
// import 'jquery-sticky'
import {BrowserRouter } from 'react-router-dom';

import Preloader from './components/preloader';
import Intro from './components/intro';
import NavBar from './components/navBar';
import Sections from './components/sections';
import Footer from './components/footer';

function App() {

  return (
    <BrowserRouter>
      <Preloader/>
      <Intro/>
      <NavBar/>
      <Sections/>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
