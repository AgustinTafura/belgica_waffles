import './index.scss'

const Nosotros = () => {


    return (
        <section id="nosotros">
            <div className="container">
                <h3>Nosotros</h3>
                <hr/>
                <div className="row justify-content-center">
                    <div className=" col-12 col-md-8 col-xl-6 title">
                        <p>
                            <span className="fjalaone"> BELGICA </span>
                            NACIÓ EN LAS FLORES, PROV. DE BUENOS AIRES, CON EL ESPÍRITU DE CREAR PRODUCTOS
                            NOBLES QUE SEAN TAN  RICOS COMO&nbsp;SALUDABLES.
                            <br /><br />
                            CON NUESTROS <span style={{fontWeight: 'bold'}}> WAFFLES </span> BUSCAMOS QUE PUEDAS PREPARAR TUS COMIDAS <span className="fjalaone">FÁCIL&nbsp;Y&nbsp;RÁPIDO
                            TODOS LOS DÍAS </span>CON UN ALIMENTO NUTRITIVO PARA VOS Y TU&nbsp;FAMILIA

                        </p>
                    </div >
                    <div className='col-12'>
                        <img  src={`${process.env.PUBLIC_URL}/images/icon_waffle.png`} alt="alternative" width={"100px"} style={{filter: "drop-shadow(2px 4px 3px gray)"}}/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Nosotros
