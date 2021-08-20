import logo from '../../logo-belgica-be.svg'
import './index.scss'
import $ from 'jquery'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  window.addEventListener('load', ()=>{
    
    const intro = document.getElementById("intro");
    const navbar = document.getElementsByClassName("navbar")[0];
    const mainNavLinks = document.querySelectorAll("nav ul li a");
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
      if (window.pageYOffset > intro.offsetHeight) {

        intro.style.marginBottom = '69px'
        navbar.classList.add("fixed-top")
      } else {
        intro.style.marginBottom = '0px'
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
	
	useEffect(() => {
		document.querySelectorAll('a').forEach(el=>{
				el.addEventListener('click',(e)=>{
						if (el.hash.charAt(0) === "#") {
						e.preventDefault()
						document.querySelector(el.hash).scrollIntoView()
						}
				})
		})
	}, [])

    
  return (    
    <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container d-flex justify-content-between">
        <Link to="#home" className="navbar-brand"> <img id='logo' src={logo} alt="logo-belgica-saludable" /></Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="nav navbar-nav navbar-right align-items-center">
                  <li><Link to="#home" >HOME</Link></li>
                  <li><Link to="#projects">SABORES</Link></li>

                </ul>
            </div>

        </div>

      </nav>
        
    )
}

export default NavBar
