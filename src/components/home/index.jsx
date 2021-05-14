import logo from '../../logo-belgica-w.svg'
import './index.scss'

const Home = () => {
    return (    
        
        <section id="home">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <img id='logo' className="navbar-brand" src={logo} alt="logo-belgica-saludable"  />
                        
                        <p>
                            LLEGÓ PARA CAMBIAR TUS
                            <span className="fjalaone"> COMIDAS </span>
                            POR UNA OPCIÓN
                            <span className="fjalaone"> RICA Y SALUDABLE.</span>
                        </p>
                        
                        <a href="#intro" className="btn btn-default smoothScroll">
                            QUIERO WAFFLES
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Home
