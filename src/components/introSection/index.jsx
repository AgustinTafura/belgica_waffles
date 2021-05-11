import './index.scss'

const IntroSection = () => {
    const iconsNames = ['100 avena', 'sin harina', 'sin azucar', 'sin conservantes', 'stevia']

    return (
        /* <!-- intro section --> */
        <section id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 title">
                    <h4>SOMOS <u>BÉ</u>LGICA</h4>
                    <h2>Acompañamos tus momentos saludables</h2>
                    <hr/>
                    <p>
                        <span className='fjalaone' >BELGICA </span>
                        LLEGÓ PARA CAMBIAR TUS
                        <span className='fjalaone'> COMIDAS </span>  
                        POR UNA OPCIÓN 
                        <span className='fjalaone'> RICA Y SALUDABLE.</span>
                    </p>
                    <p>
                        CON NUESTROS
                        <br/><br/>
                        <span style={{fontFamily:'Flamenco-Regular', fontSize:'4rem'}}> WAFFLES </span>
                         <br/>   
                        HACÉ MÁS
                        <br/> 
                        <span className='fjalaone'> FÁCIL Y RÁPIDO </span>
                        <br/>
                        TUS
                        <br/>
                        <span className='fjalaone'> DESAYUNOS, ALMUERZOS Y MERIENDAS</span>
                    </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row icon-group">
                {iconsNames.map((iconName, i)=>{
                    return(
                    <div key={i} className="icon-info col-5 col-sm-4 col-md-3 col-lg-2" style={{marginBottom: '1rem'}}>
                        <img src={`${process.env.PUBLIC_URL}/icon/${iconName.replaceAll(' ', '_')}.png`} alt={`waffles belgica saludable - ${iconName}`} style={{height: '70px'}} />
                    </div>

                    )
                })}
                </div>

            </div>



        </section>
    )
}

export default IntroSection
