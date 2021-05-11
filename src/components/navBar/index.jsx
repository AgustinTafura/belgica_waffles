import logo from '../../logo-belgica-be.svg'
import './index.scss'


const NavBar = () => {
  window.addEventListener('load', ()=>{
    
    var home = document.getElementById("home");
    var navbar = document.getElementsByClassName("navbar")[0];
    var intro = document.getElementById("intro"); 
    var mainNavLinks = document.querySelectorAll("nav ul li a");
    var mainSections = document.querySelectorAll("main section");

    
    window.onscroll = () => {
      styckyStyle()
      linkActive()
    }
  
    
    // NavBar sticky
    function styckyStyle() {
      if (window.pageYOffset > home.offsetHeight) {

        intro.style.paddingTop = '256px'
        navbar.classList.add("fixed-top")
      } else {
        navbar.classList.remove("fixed-top");
        intro.style.paddingTop = '180px'
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
        <a href="#" className="navbar-brand"> <img src={logo} alt="logo-belgica-saludable" style={{width: "7rem"}} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="nav navbar-nav navbar-right align-items-center">
                  <li><a href="#home" className="smoothScroll">HOME</a></li>
                  <li><a href="#intro" className="smoothScroll">INTRO</a></li>
                  <li><a href="#work" className="smoothScroll">WORK</a></li>
                  <li><a href="#team" className="smoothScroll">TEAM</a></li>
                  <li><a href="#portfolio" className="smoothScroll">PORTFOLIO</a></li>
                  <li><a href="#price" className="smoothScroll">PRICE</a></li>
                  <li><a href="#contact" className="smoothScroll">CONTACT</a></li>
                </ul>
            </div>

        </div>

      </nav>
        
    )
}

export default NavBar
