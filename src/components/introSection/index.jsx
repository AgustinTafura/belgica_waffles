import './index.scss'

const IntroSection = () => {

    return (
        /* <!-- intro section --> */
        <section id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 title">
                    {/* <h2 className="fjalaone">SOMOS <u>BE</u>LGICA</h2> */}
                    {/* <h3>Acompañamos tus momentos saludables</h3> */}
                    <img id="logo" src="/belgica_waffles/static/media/logo-belgica-be.d5dc6348.svg" alt="logo-belgica-saludable"></img>
                    <p>
                        {/* <span className='fjalaone' >BELGICA </span> */}
                        LLEGÓ PARA CAMBIAR TUS
                        <span className='fjalaone'> COMIDAS </span>  
                        UNA OPCIÓN 
                         <span className='fjalaone'> RICA Y SALUDABLE.</span>
                    </p>
                    <hr/>
                    <p style={{paddingTop:"35px", paddingBottom:'0px', marginBottom:'0px',}}>
                        CON NUESTROS
                    </p>
                        <div className="flamReg" > WAFFLES </div>
                    <p style={{paddingTop:"0px"}}>
                        HACÉ MÁS
                        <br/> 
                        <span className='fjalaone'> FÁCILES Y RÁPIDOS </span>
                        <br/>
                        TUS
                        <br/>
                        <span className='fjalaone'> DESAYUNOS, ALMUERZOS Y MERIENDAS</span>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection
