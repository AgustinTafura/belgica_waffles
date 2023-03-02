import { Link } from 'react-router-dom'
import logo from '../../logo-belgica-w.svg'
import './index.scss'

const Intro = () => {

    
    return (    
        
        <div id="intro">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <img id='logo' className="navbar-brand animate__animated animate__fadeInUp" src={logo} alt="logo-belgica-saludable"  />
                        
                        <p className='animate__animated animate__fadeInUp'>
                            LLEGÓ PARA CAMBIAR TUS 
                            <span className="fjalaone"> COMIDAS </span>
                            POR UNA OPCIÓN 
                            <span className="fjalaone" > RICA&nbsp;Y&nbsp;SALUDABLE.</span>
                        </p>
                        
                        <Link to="#home" className="btn btn-default smoothScroll">
                            QUIERO WAFFLES
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Intro
