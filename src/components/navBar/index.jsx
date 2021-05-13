import logo from '../../logo-belgica-be.svg'
import './index.scss'
import $ from 'jquery'

const NavBar = () => {

  window.addEventListener('load', ()=>{
    
    const home = document.getElementById("home");
    const navbar = document.getElementsByClassName("navbar")[0];
    const intro = document.getElementById("intro"); 
    const mainNavLinks = document.querySelectorAll("nav ul li a");
    const mainSections = document.querySelectorAll("main section");
    const toggler = document.querySelector("nav .navbar-collapse")
    
    window.onscroll = () => {
      styckyStyle()
      linkActive()
    }
   
    mainNavLinks.forEach(link=>{
      
      link.addEventListener('click', ()=>{
        $(toggler).collapse('toggle')
      })
    })
    
    // NavBar sticky
    function styckyStyle() {
      if (window.pageYOffset > home.offsetHeight) {

        home.style.marginBottom = '69px'
        navbar.classList.add("fixed-top")
      } else {
        home.style.marginBottom = '0px'
        navbar.classList.remove("fixed-top");
      }
    }

    // NavBar chenge link color on scroll
    const linkActive = ()=> {
      let fromTop = window.scrollY;

      mainNavLinks.forEach(link => {

        let section = document.querySelector(link.hash);


        
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      })
    }
    
  })

    
  return (    
    <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container d-flex justify-content-between">
        <a href="#intro" className="navbar-brand"> <img id='logo' src={logo} alt="logo-belgica-saludable" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="nav navbar-nav navbar-right align-items-center">
                  <li><a href="#intro" className="smoothScroll">HOME</a></li>
                  {/* <li><a href="#intro" className="smoothScroll">INTRO</a></li>
                  <li><a href="#work" className="smoothScroll">WORK</a></li>
                  <li><a href="#team" className="smoothScroll">TEAM</a></li>
                  <li><a href="#portfolio" className="smoothScroll">PORTFOLIO</a></li>
                  <li><a href="#price" className="smoothScroll">PRICE</a></li>
                  <li><a href="#contact" className="smoothScroll">CONTACT</a></li> */}
                </ul>
            </div>

        </div>

      </nav>
        
    )
}

export default NavBar
