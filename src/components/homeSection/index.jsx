import logo from '../../logo-belgica-w.svg'
import './index.scss'

const HomeSection = () => {
    return (    
        
        <section id="home">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                    <a href="#" className="navbar-brand"> <img src={logo} alt="logo-belgica-saludable" style={{width: "7rem"}} /></a>
                        <h2 className="wow bounce animate__animated animate__bounce" style={{fontFamily:'Flamenco-Regular',fontSize:'7rem'}}>WAFFLES</h2>
                        <a href="#intro" className="btn btn-default smoothScroll">QUIERO PROBARLOS</a>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default HomeSection
