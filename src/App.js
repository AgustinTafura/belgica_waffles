import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "animate.css/animate.min.css";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
// import 'jquery-sticky'
import {BrowserRouter } from 'react-router-dom';

import Preloader from './components/preloader';
import Intro from './components/intro';
import NavBar from './components/navBar';
import Sections from './components/sections';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer/>
      <Preloader/>
      <Intro/>
      <NavBar/>
      <Sections/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
