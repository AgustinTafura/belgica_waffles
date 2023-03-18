import logo from '../../logo-belgica-w.svg'
import './index.scss'
import '../IconScroll'
import IconScroll from '../IconScroll'

const Intro = () => {

    
    return (    
        
        <div id="intro">
            
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-12 col-sm-12">
                        <img id='logo' className="navbar-brand animate__animated animate__fadeInUp" src={logo} alt="logo-belgica-saludable"  />
                        
                        <p className='animate__animated animate__fadeInUp'>
                            {/* LLEGÓ PARA CAMBIAR TUS  */}
                            SUMÁ A TUS
                            <span className="fjalaone"> COMIDAS </span>
                             UNA OPCIÓN 
                            <span className="fjalaone" > RICA&nbsp;Y&nbsp;SALUDABLE.</span>
                        </p>
                        
                        {/* <Link to="#home" className="btn btn-default smoothScroll">
                            QUIERO WAFFLES
                        </Link> */}
                    </div>
                </div>
                <div className='mt-5' style={{textAlign: '-webkit-center'}}>
                    <IconScroll/>
                </div>
            </div>
        </div>
        
    )
}

export default Intro
