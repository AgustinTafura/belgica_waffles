import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "animate.css/animate.min.css";
// import 'jquery-sticky'
import './App.css';

import Preloader from './components/preloader';
import HomeSection from './components/homeSection';
import NavBar from './components/navBar';
import Sections from './components/sections';
import ProductsSection from './components/productsSection';

function App() {

  return (
    <div className="App">
      <Preloader/>
      <HomeSection/>
      <NavBar/>
      <Sections/>

    {/* <!-- work section --> */}
    <section id="work">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 title">
            <h2>Service</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
          </div>
          <div className="col-md-8 col-sm-8">
            <div className="col-md-6 col-sm-6 bg-black"> <i className="fa fa-mobile"></i>
              <h3>Mobile UX</h3>
            </div>
            <div className="col-md-6 col-sm-6 bg-red"> <i className="fa fa-cloud"></i>
              <h3>Social media</h3>
            </div>
            <div className="col-md-6 col-sm-6 bg-red"> <i className="fa fa-link"></i>
              <h3>Web Design</h3>
            </div>
            <div className="col-md-6 col-sm-6 bg-black"> <i className="fa fa-globe"></i>
              <h3>SEO</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- team section --> */}
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
            <h2>Our team</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="0.9s"><img src="images/team1.jpg" className="img-responsive" alt="team img"/>
            <div className="team-des">
              <h4>Tracy</h4>
              <h3>Designer</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="1.3s"><img src="images/team2.jpg" className="img-responsive" alt="team img"/>
            <div className="team-des">
              <h4>Linda</h4>
              <h3>Manager</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="1.6s"><img src="images/team3.jpg" className="img-responsive" alt="team img"/>
            <div className="team-des">
              <h4>Mary</h4>
              <h3>Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- portfolio section --> */}
    <div id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
            <h2>Portfolio</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
          </div>
          <div className="col-md-12 col-sm-12"></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img1.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img1.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img2.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img2.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img3.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img3.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img4.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img4.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img5.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img5.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img6.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img6.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img7.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img7.jpg" alt="portfolio img"/></a></div>
          <div className="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s"><a href="images/portfolio-img8.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img8.jpg" alt="portfolio img"/></a></div>
        </div>
      </div>
    </div>
    <ProductsSection/>
    <div id="price">
      <div className="container">
        <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
          <h2>Our Plans</h2>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="plan wow bounceIn" data-wow-delay="0.3s">
            <div className="plan_title">
              <h3>Basic</h3>
            </div>
            <div className="plan_sub_title">
              <h2>$ 25</h2>
              <small>Per month</small> </div>
            <ul>
              <li>5 ACCOUNTS</li>
              <li>20 GB SPACE</li>
              <li>20 BASIC THEMES</li>
            </ul>
            <button className="btn btn-warning">Get started</button>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="plan wow bounceIn" data-wow-delay="0.6s">
            <div className="plan_title">
              <h3>Business</h3>
            </div>
            <div className="plan_sub_title">
              <h2>$ 50</h2>
              <small>per month</small> </div>
            <ul>
              <li>10 ACCOUNTS</li>
              <li>50 GB SPACE</li>
              <li>30 PRO THEMES</li>
            </ul>
            <button className="btn btn-warning">Get started</button>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="plan wow bounceIn" data-wow-delay="0.9s">
            <div className="plan_title">
              <h3>Professional</h3>
            </div>
            <div className="plan_sub_title">
              <h2>$ 75</h2>
              <small>per month</small> </div>
            <ul>
              <li>20 ACCOUNTS</li>
              <li>100 GB SPACE</li>
              <li>60 PRO THEMES</li>
            </ul>
            <button className="btn btn-warning">Get started</button>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- contact section --> */}
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
            <h2>Contact Us</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
          </div>
          <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 contact-form wow fadeInUp" data-wow-delay="0.9s">
            <form action="#" method="post">
              <input type="text" className="form-control" placeholder="Name"/>
              <input type="email" className="form-control" placeholder="Email"/>
              <textarea className="form-control" placeholder="Message" rows="6"></textarea>
              <input type="submit" className="form-control" value="SEND EMAIL"/>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- google map section --> */}
    <div className="google_map">
      <div id="map-canvas"></div>
    </div>
    {/* <!-- footer section --> */}
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h2 className="wow fadeIn" data-wow-delay="0.9s">Follow Us</h2>
            <ul className="social-icon">
              <li><a href="#" className="fa fa-facebook wow bounceIn" data-wow-delay="0.3s"></a></li>
              <li><a href="#" className="fa fa-twitter wow bounceIn" data-wow-delay="0.6s"></a></li>
              <li><a href="#" className="fa fa-behance wow bounceIn" data-wow-delay="0.9s"></a></li>
              <li><a href="#" className="fa fa-dribbble wow bounceIn" data-wow-delay="0.9s"></a></li>
              <li><a href="#" className="fa fa-github wow bounceIn" data-wow-delay="0.9s"></a></li>
              <li><a href="#" className="fa fa-android wow bounceIn" data-wow-delay="0.9s"></a></li>
              <li><a href="#" className="fa fa-phone wow bounceIn" data-wow-delay="0.9s"></a></li>
            </ul>
          </div>
          <div className="col-md-12 col-sm-12 copyright">
            <p>Copyright © 2084 Company Name 
            
            | Template by <a target="_blank" rel="nofollow" href="http://www.templatemo.com/tm-469-impulse">Impulse Design</a></p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
