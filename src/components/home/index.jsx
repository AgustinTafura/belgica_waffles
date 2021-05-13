import logo from '../../logo-belgica-w.svg'
import './index.scss'

const Home = () => {
    return (    
        
        <section id="home">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <img id='logo' className="navbar-brand" src={logo} alt="logo-belgica-saludable"  />
                        <h1 className="wow bounce animate__animated animate__bounce flamReg">WAFFLES</h1>
                        <a href="#intro" className="btn btn-default smoothScroll">QUIERO PROBARLOS</a>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Home
